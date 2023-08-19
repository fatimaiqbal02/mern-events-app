import express  from "express";
import { createReview, getAllReviews, getReviewByEventId, getReviewByUserId, getSingleReview } from "../Controllers/reviewController.js";

const router = express.Router()              

router.post('/:eventId/:userId', createReview)
router.get('/getReviewByUserId/:id', getReviewByUserId)
router.get('/getReviewByeventId/:id', getReviewByEventId)
router.get('/:id', getSingleReview)
router.get('/', getAllReviews)

export default router
