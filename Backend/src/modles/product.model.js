import { mongoose, Schema } from "mongoose";
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
      
      
    },
    keyFeatures: 
    // multiple features -  ui as bullet points
    [{
      type: String,
    }],
    // multile images
    image: [{
        type:String, 
    }],
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

  default: 0,
    },
  },
  { timestamps: true }
);


export const Product = mongoose.model("Product",productSchema); 
