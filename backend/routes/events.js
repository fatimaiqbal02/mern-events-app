import express  from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createNewEvent, deleteEvent, getAllEvents, getFeaturedEvents, 
         getSingleEvent, getEventsBySearch, getEventsCount, updateEvent } from "../Controllers/eventController.js";

const router = express.Router()              

router.post('/', verifyAdmin, createNewEvent)
router.put('/:id', verifyAdmin, updateEvent)
router.delete('/:id', verifyAdmin, deleteEvent)
router.get('/:id', getSingleEvent)
router.get('/', getAllEvents)
router.get('/search/getEventBySearch', getEventsBySearch)
router.get('/search/getFeaturedEvents', getFeaturedEvents)
router.get('/search/getEventCount', getEventsCount)

export default router
