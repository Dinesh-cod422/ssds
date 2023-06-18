import dotenv from 'dotenv'
import path from 'path'
import connectDB from './Config/dataBS.js';
import app from './app.js'

dotenv.config({path: path.join(__dirname,"Config/config.env") });

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`server listening to the port: ${process.env.PORT} in ${process.env.NODE_ENV}`)
})