const mongoose = require('mongoose')

const dbConnect = ()=>{
    mongoose.connect("mongodb://0.0.0.0/DB-HANSH").then(()=>{
        console.log('connected to database');
        
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConnect