const { emailValidation, passwordValidation } = require("../helpers/validation");
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

const registrationController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email is already in use
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).send("Email Already Exists");
    }

    // Validate name, email, and password
    if (!name) {
      return res.status(400).send("Name Required");
    }

    if (!email || !emailValidation(email)) {
      return res.status(400).send("Valid Email Required");
    }

    if (!password || !passwordValidation(password)) {
      return res.status(400).send(
        "Please enter one uppercase letter, one lowercase letter, and one number or special character."
      );
    }

    // OTP generation
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: true,
    });

    // Bcrypt password generation
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user and save to database
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
      otp: otp,
    });

    await user.save();

    // Send mail using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tushar789imran@gmail.com",
        pass: "rehd ywpm ebng tkoi",
      },
    });

    const mailOptions = {
      from: "tushar789imran@gmail.com",
      to: "tusharimran789@gmail.com",
      subject: "Please Verify your email",
      html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Verify your email by click on this button <a href="https://www.figma.com/">Verify</a> ${otp}</div></div>`,
    };

    await transporter.sendMail(mailOptions);

    res.send("User created successfully");
  } catch (error) {
    console.error("Error creating user or sending email", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = registrationController;
