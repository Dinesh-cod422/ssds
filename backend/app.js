import express from 'express' 
const app = express();

app.use(express.json())
import profile from './routes/product.js'

app.use("/api/v1/", profile)

export default app