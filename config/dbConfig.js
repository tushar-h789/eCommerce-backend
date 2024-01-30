const mongoose = require("mongoose");

const {USER_NAME, DB_PASS, DB_NAME} = process.env

function dbConnection() {
  mongoose
    .connect(
      `mongodb+srv://${USER_NAME}:${DB_PASS}@cluster0.vuzwqtv.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => console.log("Database Connected!"));
}

module.exports = dbConnection;
