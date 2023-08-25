import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createNewUser, deleteUser, getAllUsers, 
         getSingleUser, updateUser } from "../Controllers/userController.js";

const router = express.Router()              

router.post('/',verifyAdmin, createNewUser)
router.put('/:id',verifyAdmin, updateUser)
router.delete('/:id',verifyAdmin, deleteUser)
router.get('/:id',verifyAdmin, getSingleUser)
router.get('/', verifyAdmin, getAllUsers)

export default router
