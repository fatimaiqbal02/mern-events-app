import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    event_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event' 
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);