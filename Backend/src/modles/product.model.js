import mongoose, { mongo, Schema } from "mongoose";
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique:true,
    },
    brandName:{
      type: String,
      required: true,
    },
    price: {
        type:Number,
        required:true,
    },
    description:{
      type: String,
      required: true,
      
    },
    keyFeatures: [{
      type: String,
    }],
    image: {
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        default:0
    },
     numReviews:{
        type:Number,
        default:0
    },
    stockCount : {
        type: Number,
  required: true,
  default: 0,
    },
    owner:{
      type:mongoose.Types.ObjectId,
      ref:"User"
    }
  },
  { timestamps: true }
);


export const Product = mongoose.model("Product",productSchema); 
