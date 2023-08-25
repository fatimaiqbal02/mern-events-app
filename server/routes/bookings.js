import express  from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { createBooking, deleteBooking, 
         getAllBookings, getBooking, updateBooking } from "../Controllers/bookingController.js";  

const router = express.Router()              

router.post('/', verifyUser ,createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getAllBookings)
router.put('/:id', verifyAdmin, updateBooking)
router.delete('/:id',verifyAdmin, deleteBooking)

export default router
