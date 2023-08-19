import express  from "express";
import { createNewUser, deleteUser, getAllUsers, 
         getSingleUser, updateUser } from "../Controllers/userController.js";

const router = express.Router()              

router.post('/', createNewUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getSingleUser)
router.get('/', getAllUsers)

export default router
