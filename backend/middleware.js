const JWT = require("jsonwebtoken");
const { companySchema, ipoSchema } = require("./schema.js");

// Middleware for validating company data
module.exports.validateCompany = (req, res, next) => {
  try{
    const { error } = companySchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }
    next();
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Middleware for validating IPO data
module.exports.validateIPO = (req, res, next) => {
  try {
    const { error } = ipoSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }
    next();
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// User Authentication Middleware (means isLoggedIn or not)
module.exports.userAuth = async (req, res, next) => {
  if (!req.cookies) {
    return res.json({ success: false, message: "No cookies found" });
  }

  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not Authorised, Login First" });
  }

  try {
    const tokenDecode = JWT.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
      req.user = tokenDecode.id;
    } else {
      return res.json({
        success: false,
        message: "Not Authorised, Login Again",
      });
    }

    next();
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};