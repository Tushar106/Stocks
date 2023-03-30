import express from 'express'
import { verifyUser } from '../utils/verifyToken.js';
import { updateUser } from '../controllers/updateUser.js';

const router=express();
router.put("/:id",verifyUser,updateUser);

export default router