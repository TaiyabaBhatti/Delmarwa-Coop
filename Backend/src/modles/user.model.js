import {Schema,mongoose} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return
    }

    this.password = await bcrypt.hash(this.password,14)
})

userSchema.methods.passwordCheck = async function (commingPassword){

    return await bcrypt.compare(commingPassword,this.password)
}

userSchema.methods.generateAccessToken = async function ()  {

return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
)


}

userSchema.methods.generateRefreshToken = async function ()  {

return jwt.sign(
    {
      _id: this._id,
   
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:process.env.REFRESH_TOKEN_EXPIRY}
)


}

export const User = mongoose.model("User", userSchema);
