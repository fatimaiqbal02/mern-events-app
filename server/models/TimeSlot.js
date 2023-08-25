import mongoose from "mongoose";

const TimeslotSchema = new mongoose.Schema(
  {
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
  },
  { timestamps: true }
);

export default mongoose.model("Timeslot", TimeslotSchema);