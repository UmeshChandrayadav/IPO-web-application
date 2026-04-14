if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const main = require('./config/mongodb.js');
const port = process.env.PORT || 5000;
const session = require('express-session');
const MongoStore = require('connect-mongo'); // For session storage in MongoDB
const cookieParser = require('cookie-parser');
const ExpressError = require('./utils/ExpressError.js');

const userRoute = require('./routes/user.js');
const ipoRoute = require('./routes/ipo.js');
const companyRoute = require('./routes/companies.js');
const documnetsRoute = require('./routes/documents.js');

main();

// Middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:8080', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
  credentials: true, // Allow credentials if needed
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session configuration
const store = MongoStore.create({
  // MongoStore is used to store the session data in the MongoDB Atlas (which is a cloud database) and it is used to store the session data in the database
  mongoUrl: process.env.MONGO_URL, // here we are using the MongoDB Atlas URL to store the session data in the database
  collectionName: "sessions",
  crypto: {
    // crypto is used to encrypt the session data and it is used to store the session data in the encrypted form
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600, // time period in seconds and it is used to update the session data after the time period
});
const sessionOptions = {
  store: store,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    http: true,
    secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 day
  },
};
app.use(session(sessionOptions));

// All Routes
app.use('/api/user/auth', userRoute);
app.use('/api/ipo', ipoRoute);
app.use('/api/companies', companyRoute);
app.use('/api/documents', documnetsRoute);

// Error Handling Route
app.all("/", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  if (err instanceof ExpressError) {
    return res
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }
  console.error(err);
  res.status(500).json({ success: false, message: err.message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});