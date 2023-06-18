import Profile from '../models/productModel.js'

export const getProfiles = async (req,res,next) => {
    const users = await Profile.find() 
    res.status(200).json(users,{
        success: true,
        message: "this route will show all the products in database"
    })
}

