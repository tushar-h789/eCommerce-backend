require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const dbConnection = require("./config/dbConfig");
const route = require("./routes");

// image er jonno aeta neoa hoiche
const path = require('path')

//middleware
app.use(cors());
app.use(express.json());

//database connect
dbConnection();

//routes connection
app.use(route);

// image parpus
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(7000, () => {
  console.log(`Server is running on port ${7000}`);
});
