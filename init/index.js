const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("./data");

mongoose.connect("mongodb://127.0.0.1:27017/majorproject")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data Initialized");
};

initDB().then(() => {
  mongoose.connection.close();
});