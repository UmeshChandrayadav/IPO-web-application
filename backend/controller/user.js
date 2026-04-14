const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const transporter = require('../config/nodemailer.js'); // Nodemailer transporter for sending emailsHello. Hello.
const crypto = require('crypto');
// const fetch = require('node-fetch');


// Helper function to generate a JWT token for our application
// const generateToken = (id) => {
//     return JWT.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' }); // Sign token with user ID and secret, set expiration
// };

module.exports.register = async (req, res) => {
  const { userName, email, password, recaptchaToken } = req.body;

  if ((!userName)) {
    return res.json({ success: "false", message: "Username required" });
  }

  if ((!email)) {
    return res.json({ success: "false", message: "Email is required" });
  }

  if ((!password)) {
    return res.json({ success: "false", message: "Password is required" });
  }

  const recaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

  try {
     // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(recaptchaVerificationUrl, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    
    const recaptchaData = await recaptchaResponse.json();

    // // Check if reCAPTCHA verification was successful
    if (!recaptchaData.success) {
      console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
      return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
    }

    const existingUsername = await User.findOne({userName});
    if (existingUsername) {
        return res.json({ success: false, message: "Username already exists" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exist" });
    }

    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password with the generated salt
    const user = new User({
      userName,
      email,
      password: hashedPassword,
      registrationMethod: "local"
    });

    await user.save();

    // Generate JWT Token
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    }); // token is generated and in JWT we have to pass id, secret, and expire time

    // Store token in cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Store session in MongoDB
    req.session.user = { id: user._id, email: email };

    // Sending Welcome Email
    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: email,
      subject: "Welcome to Bluestock Fintech",
      text: `Welcome to Bluestock Fintech. Your account has been created with email id: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: `Welcome ${userName}`, user: user});
  } catch (err) {
    res.json({ success: "false", message: err.message });
  }
};

// Login User
module.exports.login = async (req, res) => {
  const { email, password, recaptchaToken} = req.body;

  if ((!email)) {
    return res.json({ success: "false", message: "Email is required" });
  }

  if ((!password)) {
    return res.json({ success: "false", message: "Password is required" });
  }

  const recaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

  try {
    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(recaptchaVerificationUrl, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const recaptchaData = await recaptchaResponse.json();

    // // Check if reCAPTCHA verification was successful
    if (!recaptchaData.success) {
      console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
      return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ sucess: false, message: "Invalid Email" });
    }

    // If user registered with Google, block password login
    if (user.googleId && (!user.password || user.registrationMethod === 'google')) {
      return res.json({ success: false, message: "Please login with Google for this account." });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ sucess: false, message: "Invalid Password" });
    }

    // Generate JWT Token
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    }); // token is generated and in JWT we have to pass id, secret, and expire time

    // Store token in cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Store session in MongoDB
    req.session.user = { id: user._id, email: email };

    res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        userName: user.userName,
        isAccountVerified: user.isAccountVerified,
      },
      message: `Welcome back! ${user.userName}`
    });
  } catch (err) {
    res.json({ sucess: false, message: err.message });
  }
};

// Logout User
module.exports.logout = async (req, res) => {
  try {
    // Clear token from cookies
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    // Destroy session in MongoDB
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ message: "Logout failed" });
    });

    // Clear session cookie from the client
    res.clearCookie("connect.sid", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    res.json({ success: true, message: "Logged Out" });
  } catch (err) {
    res.json({ sucess: false, message: err.message });
  }
};

// Send Verification OTP to user's Email
module.exports.sendVerifyLink = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.isAccountVerified) {
      return res.json({success: false, message: "Account is already verified"});
    }

    const token = crypto.randomBytes(32).toString('hex');
    user.verifyEmailToken = token;
    user.verifyEmailTokenExpireAt = Date.now() + 1000 * 60 * 10; //10 minutes expiry

    await user.save();

    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}&uid=${user._id}`;

    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: user.email,
      subject: "Account Verification Link",
      text: `Click the link to verify your email: ${verificationLink}. This link is valid for 10 minutes.`,
      // html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}",user.email),
    };

    await transporter.sendMail(mailOptions);
    res.json({ sucess: true, message: "Verification Link Sent on Email" });
  } catch (err) {
    res.json({ sucess: false, message: err.message });
  }
};

// Email verified or not
module.exports.verifyEmail = async (req, res) => {
  const {token, uid} = req.query;

  if ((!uid)) {
    return res.json({ success: "false", message: "User is required" });
  }

  if ((!token)) {
    return res.json({ success: "false", message: "Invalid request" });
  }

  try {
    const user = await User.findById(uid);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.verifyEmailToken === "" || user.verifyEmailToken !== token) {
      return res.json({ success: false, message: "Invalid or expired verification link." });
    }
    if (user.verifyOtpExpireAt < Date.now()) {
      return res.json({ success: false, message: "Verification link expired." });
    }

    user.isAccountVerified = true;
    user.verifyEmailToken = "";
    user.verifyEmailTokenExpireAt = 0;

    await user.save();
    res.json({ success: true, message: "Email verified successfully" });
    return res.redirect(`${process.env.FRONTEND_URL}/login`);
  } catch (err) {
    res.json({ sucess: false, message: err.message });
  }
};

// Check if user is authenticated or not
module.exports.isAuthenticated = async (req, res) => {
  try {
    return res.json({ success: true });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// Send password reset Link to user's Email
module.exports.sendResetPasswordLink = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({ success: false, message: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const token = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordTokenExpireAt = Date.now() + 1000 * 60 * 15;

    await user.save();

    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}&uid=${user._id}`;

    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: user.email,
      subject: "Reset your passwrod",
      text: `Click the link to reset your password: ${resetLink}, this link is valid for 15 minutes.`,
      // html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}",user.email),
    };

    await transporter.sendMail(mailOptions);
    return res.json({ sucess: true, message: "Password reset link sent to your Email", token: token, uid: user._id, link: resetLink });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// Reset User Password
module.exports.resetPassword = async (req, res) => {
  const { newPassword } = req.body;
  const {token, uid} = req.query;

  if ((!uid)) {
    return res.json({ success: "false", message: "User is required" });
  }

  if ((!token)) {
    return res.json({ success: "false", message: "Invalid request" });
  }

  if ((!newPassword)) {
    return res.json({ success: "false", message: "New password is required" });
  }

  try {
    const user = await User.findById( uid );

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.resetPasswordToken === "" || user.resetPasswordToken !== token) {
      return res.json({ success: false, message: "Invalid or expired reset link" });
    }

    if (user.resetPasswordTokenExpireAt < Date.now()) {
      return res.json({ success: false, message: "Reset link expired." });
    }

    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
    const hashedPassword = await bcrypt.hash(newPassword, salt); // Hash the new password with the generated salt
    // Update user's password and clear OTP fields
    user.password = hashedPassword;
    user.resetPasswordToken = "";
    user.resetPasswordTokenExpireAt = 0;

    await user.save();
    res.json({
      success: true,
      message: "Password has been reset successfully",
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

module.exports.googleLogin = (req, res) => {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const options = {
        redirect_uri: process.env.GOOGLE_REDIRECT_URI, // Your backend callback URI
        client_id: process.env.GOOGLE_CLIENT_ID,
        access_type: 'offline', // Request a refresh token for long-lived access (optional)
        response_type: 'code', // We want an authorization code
        prompt: 'consent', // Force user to re-approve permissions (useful during development)
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile', // Basic profile info
            'https://www.googleapis.com/auth/userinfo.email',   // User's email address
        ].join(' '),
    };

    const qs = new URLSearchParams(options).toString(); // Create query string
    res.redirect(`${rootUrl}?${qs}`); // Redirect the user to Google's consent page
};

module.exports.googleCallback = async (req, res) => {
    const code = req.query.code; // Extract the authorization code from query parameters

    if (!code) {
        console.error("Google OAuth callback: No authorization code received.");
        return res.redirect(`${process.env.FRONTEND_URL}/login?error=google_auth_failed`);
    }

    try {
        // Step 1: Exchange authorization code for access token and ID token
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: process.env.GOOGLE_REDIRECT_URI,
                grant_type: 'authorization_code',
            }).toString(),
        });

        if (!tokenResponse.ok) {
            const errorText = await tokenResponse.text();
            console.error("Failed to exchange code for tokens:", errorText);
            return res.redirect(`${process.env.FRONTEND_URL}/login?error=google_token_exchange_failed`);
        }

        const tokens = await tokenResponse.json();
        const { access_token, id_token } = tokens;

        // Step 2: Use access token or ID token to get user information
        // Option A: Using ID Token (recommended for basic profile, it's signed)
        // const decoded = jwt.decode(id_token); // id_token is a JWT, can be decoded directly for basic info
        // const googleUser = decoded;

        // Option B: Using Access Token to fetch from userinfo endpoint (more complete profile)
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        if (!userInfoResponse.ok) {
            const errorText = await userInfoResponse.text();
            console.error("Failed to fetch user info from Google:", errorText);
            return res.redirect(`${process.env.FRONTEND_URL}/login?error=google_userinfo_failed`);
        }

        const googleUser = await userInfoResponse.json();

        // Step 3: Find or create user in your database
        let user = await User.findOne({ googleId: googleUser.sub }); // 'sub' is Google's unique user ID

        if (!user) {
            // User not found, create a new one
            const existingEmailUser = await User.findOne({ email: googleUser.email });

            if (existingEmailUser ) {
                // Email already registered with password, do not allow Google signup
                return res.redirect(`${process.env.FRONTEND_URL}/login?err=email_already_registered`);
            }
            user = new User ({
                googleId: googleUser.sub,
                name: googleUser.name || googleUser.email,
                email: googleUser.email,
                profilePicture: googleUser.picture,
                registrationMethod: "google",
            });
            await user.save();
        }
        // If user already exists and logs in again, you might want to update their info (e.g., profile picture)
        // Or simply log them in.

        // Step 4: Generate your application's internal JWT for the user
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        }); // token is generated and in JWT we have to pass id, secret, and expire time

        // Store token in cookies
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        // Store session in MongoDB
        req.session.user = { id: user._id, email: user.email };

        // Redirect to frontend with the generated JWT
        res.redirect(`${process.env.FRONTEND_URL}/authsuccess?token=${token}`);

    } catch (error) {
        console.error("Critical error during Google OAuth callback process:", error);
        res.redirect(`${process.env.FRONTEND_URL}/login?error=google_auth_error`);
    }
};

module.exports.getUserData = async (req, res) => {
    try{
        const {userId} = req.body;
        const user = await User.findById(userId);

        if(!user) {
            return res.json({success: false, message: "User not found"});
        }

        return res.json({success: true, userData: user});

    }catch(err) {
        res.json({success: false, message: err.message});
    }
};

