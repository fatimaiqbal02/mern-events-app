import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    event_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event' 
    },
    timeslot_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Timeslot' 
    },
    bookingDate: {
        type: Date,
        required: true
    },
    guestSize: {
        type: Number,
        required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);