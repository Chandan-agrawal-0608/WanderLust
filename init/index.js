const mongoose = require("mongoose");
const listing = require("../models/listing.js");
const initData=require("./data.js");


async function main() {
    try {
      await mongoose.connect('mongodb+srv://brijesh00784:1iggaoELzB6oqyRQ@cluster0.nlhu9jl.mongodb.net/wander', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected");
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  }
  

const initDB= async()=>{
await listing.deleteMany({});
initData.data=initData.data.map((obj) => ({
    ...obj,
    owner:"67717c9e34073547bd39ae34",
}));

await listing.insertMany(initData.data);
console.log("data was intialised");


}


initDB();
