const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
//middleware for check authentication,authentication using JWT token
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({
      errors: [
        {
          msg: "No token, authorization denied",
        },
      ],
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({
      errors: [
        {
          msg: "Token is not valid",
        },
      ],
    });
  }
};
