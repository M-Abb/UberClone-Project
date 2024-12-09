const userModel=require('../models/user.model');
//USER KO CRETAE KARNA
module.exports.createUser=async({firstname,lastname,email,password})=>{
    if(!firstname || !email || !password){
        throw new Error('ALL FIELDS ARE REQUIRED');
    }
    const user=userModel.create({
        fullname:{
            firstname,
            lastname,
        },email,password
    })
    return user;
}