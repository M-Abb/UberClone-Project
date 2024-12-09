const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "FIRST NAME MUST BE ATLEAST # CHARACTERS"],
    },
    lastname: {
      type: String,
      minlength: [3, "LAST NAME MUST BE ATLEAST # CHARACTERS"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email NAME MUST BE ATLEAST # CHARACTERS"],
  },
  password: {
    type: String,
    required: true,
    select:false,
  },
  SocketId: {
    //FOR LIVETRACKING
    type: String,
  },
});
userSchema.methods.generateAuthToken=function(){
   const token=jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}
userSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.Password);
 }
 userSchema.statics.hashpassword= async function(password){
    return await bcrypt.hash(password,10);
 }
const userModel=mongoose.model('user',userSchema);
module.exports=userModel 