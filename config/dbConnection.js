const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDb;
