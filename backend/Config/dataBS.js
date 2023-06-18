import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`mongoDb connected : ${con.connection.host}`)
    }).catch((error)=> {
        console.log(error)
    })
}

export default connectDB