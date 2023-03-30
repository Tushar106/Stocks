import e from "express"
import  User from '../models/User.js';
export const updateUser=async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { money:req.body.money } )
        console.log(updateUser)
        res.status(200).json(updateUser)
        // res.status(200).json(findUser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}