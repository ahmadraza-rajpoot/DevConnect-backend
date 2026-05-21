const mongoose = require("mongoose")

//const {URI} = require("../../secret.js")

const connectDB = async ()=>{
 await mongoose.connect("mongodb://raza:MhO428dPMUEPYuv5@ac-fyzkrz0-shard-00-00.purvy8z.mongodb.net:27017,ac-fyzkrz0-shard-00-01.purvy8z.mongodb.net:27017,ac-fyzkrz0-shard-00-02.purvy8z.mongodb.net:27017/node?ssl=true&replicaSet=atlas-nw8y26-shard-0&authSource=admin&appName=store/node")
}


module.exports =  connectDB


