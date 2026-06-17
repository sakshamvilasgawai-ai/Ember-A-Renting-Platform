const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: {
    url:String,
    __filename:String,
  },
  location:String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref:"User",
  },
  category:{
    type:String,
    enum:["Electronics","Gym","Books","Sports","Hobbies","Bikes","Scooters","Cars","Cameras","Vehicles","Tools","Camping"]
  }
});

listingSchema.post("findOneAndDelete", async(listing) => {
   if(listing){
      await Review.deleteMany({_id:{$in: listing.reviews}});
   }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;