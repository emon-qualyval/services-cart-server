const mongoose = require('mongoose')

const url = 'mongodb+srv://database:database@cluster0.0ddcj.mongodb.net/getServices?retryWrites=true&w=majority'

const connectDb = () => {
    mongoose
    .connect(url)
    .then((data) => {
      console.log("Database Connection established", data.connection.host);
    })
    .catch((err) => {
      console.error(err.message);
    });
}

module.exports = connectDb;