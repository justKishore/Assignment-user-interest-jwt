// S2 Create Nodejs Server and connect to database

const mongoose = require("mongoose");

const { Mongo_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(Mongo_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("Database connection failed");
      console.log(err);
      process.exit(1);
    });
};
