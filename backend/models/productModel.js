import mongoose from "mongoose"


const profileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
    },
    age:{
        type:Number,
        required:true
    },
})


let schema = mongoose.model('Profile', profileSchema)

export default schema