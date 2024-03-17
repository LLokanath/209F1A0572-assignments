const express =require('express') 
const mongoose= require('mongoose') 
const app=express() 
mongoose.connect("mongodb://localhost:27017/test") 
const UserSchema =new mongoose.Schema({ 
username: String, 
password: String
}) 
const UserModel=mongoose.model("users", UserSchema) 
app.get("/getusers", (req, res)=>{ 
UserModel.find({}).then(function(user){ 
 res.json(useres) 
}).catch(function(err){ 
console.log(err) 
}) 
}) 
app.listen(3000, ()=>{ 
 console.log("Server is running") 
})