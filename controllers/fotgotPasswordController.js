const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

const forgotPasswordController = async (req, res) => {
  try {
    // Extract email from the request body
    const { email } = req.body;

    const existingUser = await User.findOne({ email: email })

    

    
    // Check if the user exists
    if (!existingUser) {
      // If the user is not found, send a 401 response
      return res.status(401).send({ error: "Credentials are not valid" });
    }

    // secret key create in terminal
    // require('crypto').randomBytes(64).toString('hex')
    jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, async function(err, token) {
      const updateUser = await User.findOneAndUpdate({ email: email },
        {
          $set: {
            token: token
          }
        },
        {
          strict: false
        }
        );
      console.log(updateUser);

      //  Send mail using nodemailer to reset the password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tushar789imran@gmail.com",
        pass: "rehd ywpm ebng tkoi",
      },
    });

    const mailOptions = {
      from: process.env.BASE_EMAIL,
      to: existingUser.email,
      subject: "Reset Your Password",
      html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please change your password by clicking on this link <a href="http://localhost:5173/changepassword/${token}">click</a></div></div>`,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).send({ success: "Check your email for the password reset link" });
    });

   

  } catch (error) {
    console.error("Error during forgot password process:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = forgotPasswordController;
