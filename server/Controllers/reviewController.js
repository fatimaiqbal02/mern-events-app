import Review from '../models/Review.js'

//1) TO CREATE A REVIEW
export const createReview = async (req, res)=>{

    const newReview = new Review({
        ...req.body
    })

    try{
        const savedReview = await newReview.save()
        res.status(200).json({status: "success", success:"true", 
                             message: "Review Submitted", data: savedReview})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                             message: "Failed to submit Review"})
    }
}

//2) TO GET REVIEW BY USER ID
export const getReviewByUserId = async (req, res)=>{
     
    const id = req.params.id

    try{
        const userReview = await Review.find({user_id: id})
        res.status(200).json({status: "success", success:"true", 
                             message: "Succesfull", data: userReview})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                             message: "Error: Review Data Not Found."})
    }
}

//3) TO GET SINGLE REVIEW
export const getSingleReview = async (req, res) =>{

    const id = req.params.id

    try{
        const singleReview = await Review.findById(id)
        res.status(200).json({status: "success", success:"true", 
                             message: "Sucessful", data: singleReview})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: Review Data Not Found."})
    }
}

//4) TO GET ALL REVIEWS
export const getAllReviews = async (req, res) =>{

    try{
        const allReviews = await Review.find({})
        res.status(200).json({status: "success", success:"true", count: allReviews.length,
                             message: "Sucessful", data: allReviews})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: Review Data Not Found."})
    }
}

//5) TO GET REVIEW BY EVENT ID
export const getReviewByEventId = async (req, res)=>{
     
    const id = req.params.id

    try{
        const userReview = await Review.find({event_id: id})
        res.status(200).json({status: "success", success:"true", 
                             message: "Succesfull", data: userReview})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                             message: "Error: Review Data Not Found."})
    }
}
