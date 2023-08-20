import express  from "express";
import { createTimeslot, deleteTimeslot, getAllSlots, updateTimeslot } from "../Controllers/timeSlotController.js";

const router = express.Router()   

router.post('/', createTimeslot)
router.get('/', getAllSlots)        
router.put('/:id', updateTimeslot)
router.delete('/:id', deleteTimeslot)   

export default router
