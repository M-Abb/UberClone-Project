const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("CONNECT TO DB");//WE CAN CONNECT TO DB NOW create USERMODEL>
    })
    .catch((err) => {
      console.error("Error connecting to DB:", err);
    });
}

module.exports = connectToDb;
