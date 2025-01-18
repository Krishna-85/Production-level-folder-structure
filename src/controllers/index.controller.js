const userModel = require('../models/usermodel')

module.exports.indexController = (req, res)=>{
   res.send('index page') 
}


module.exports.registerController = async (req, res)=>{
    const {username, email , password} = req.query
    const newUsers = new userModel({
        username:username,
        email:email,
        password:password,
    })
   await newUsers.save()
   res.send('registered')
}

module.exports.updateController = async (req, res)=>{
    const update = await userModel.findOneAndUpdate({
        username:"vaibhav"
    },{username:"Hanshraj"})
    res.send("updated")
}

module.exports.findController = async (req, res)=>{
    const find = await userModel.find({
        username:"krishna chauahn"
    })
    res.send(find)
    console.log(find);
    
}

module.exports.deleteController = async (req, res)=>{
    await userModel.findOneAndDelete({
        username:"aditya"
    })
    res.send("delete successfully")
    
}