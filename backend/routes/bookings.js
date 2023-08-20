import express  from "express";
import { createBooking, deleteBooking, 
         getAllBookings, getBooking, updateBooking } from "../Controllers/bookingController.js";

const router = express.Router()              

router.post('/', createBooking)
router.get('/:id', getBooking)
router.get('/', getAllBookings)
router.put('/:id', updateBooking)
router.delete('/:id', deleteBooking)

export default router
