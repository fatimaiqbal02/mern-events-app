import express  from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { createReview, getAllReviews, getReviewByEventId, 
         getReviewByUserId, getSingleReview } from "../Controllers/reviewController.js";

const router = express.Router()              

router.post('/', verifyUser, createReview)
router.get('/getReviewByUserId/:id', verifyAdmin, getReviewByUserId)
router.get('/getReviewByeventId/:id', getReviewByEventId)
router.get('/:id', getSingleReview)
router.get('/', getAllReviews)

export default router
