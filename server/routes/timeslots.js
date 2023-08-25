import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createTimeslot, deleteTimeslot, 
         getAllSlots, updateTimeslot } from "../Controllers/timeSlotController.js";

const router = express.Router()   

router.post('/', verifyAdmin, createTimeslot)
router.get('/', getAllSlots)        
router.put('/:id',verifyAdmin, updateTimeslot)
router.delete('/:id',verifyAdmin, deleteTimeslot)   

export default router
