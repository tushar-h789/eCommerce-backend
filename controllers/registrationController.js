const {
  emailValidation,
  passwordValidation,
} = require("../helpers/validation");
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

const registrationController = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if email is already in use
  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.send("Email Already Exists");
  }

  // Validate name, email, and password
  if (!name) {
    return res.send("Name Required");
  }

  if (!email) {
    return res.send("Email Required");
  } else if (!emailValidation(email)) {
    return res.send("Valid Email Required");
  }

  if (!password) {
    return res.send("Password Required");
  } else if (!passwordValidation(password)) {
    return res.send(
      "Please enter one uppercase letter, one lowercase letter, and one number or special character."
    );
  } else {
    //otp generate
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: true,
    });
    // console.log(otp);
    //bcrypt password generate
    bcrypt.hash(password, 10, async function (err, hash) {
      // Create user and save to database
      const user = new User({
        name: name,
        email: email,
        password: hash,
        otp: otp,
      });

      try {
        await user.save();

        //send mail in gmail, nodemailer
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "tushar789imran@gmail.com",
            pass: "rehd ywpm ebng tkoi",
          },
        });

        const info = await transporter.sendMail({
          from: "tushar789imran@gmail.com", // sender address
          to: "tusharimran789@gmail.com", // list of receivers
          subject: "Please Verify your email", // Subject line
          html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Verify your email by click on this button <a href="https://www.figma.com/">Verify</a> ${otp}</div></div>`, // plain html body
        });

        console.log(info);

        res.send("User created successfully");
      } catch (error) {
        console.error("Error saving user to database", error);
        res.status(500).send("Error creating user");
      }
    });
  }
};

module.exports = registrationController;
