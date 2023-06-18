import express from 'express'
const router = express.Router()
import { getProfiles } from '../Controllers/productController.js'


router.get("/profile", getProfiles)

export default router