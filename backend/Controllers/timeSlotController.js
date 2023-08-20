import Timeslot from '../models/TimeSlot.js'

//1) TO CREATE A TIMESLOT
export const createTimeslot = async (req, res)=>{

    const { start_time, end_time } = req.body;

    // Check if there's an existing timeslot
    const existingSlot = await Timeslot.findOne({start_time, end_time});

    if (existingSlot) {
        return res.status(400).json({status: "failed",success: "false",
                                     message: "Timeslot already present"});
    }

    const newTimeslot = new Timeslot(req.body)

    try{
        const savedslot = await newTimeslot.save()
        res.status(200).json({status: "success", success:"true", 
                                 message: "New time slot is created", data: savedslot})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                                 message: "Failed to Create timeslot"})
    }
}

//2)TO GET ALL TIMESLOTS
export const getAllSlots = async (req, res)=>{

    try{
        const allSlots = await Timeslot.find()
        res.status(200).json({status: "success", success:"true", 
                                 message: "Succesful", count: allSlots.length, data: allSlots})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                                 message: "Internal Server Error"})
    }
}

//3)TO UPDATE A TIMESLOT
export const updateTimeslot = async (req, res)=>{

    const id = req.params.id

    try{
        const updateTimeslot = await Timeslot.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({status: "success", success:"true", 
                             message: "Timeslot Sucessfully Updated", data: updateTimeslot})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "Timelsot Cannot be Updated. Try again"})
    }
}

//4)TO DELETE A TIMESLOT
export const deleteTimeslot = async (req, res)=>{

    const id = req.params.id

    try{
        await Timeslot.findByIdAndDelete(id)
        res.status(200).json({status: "success", success:"true", 
                             message: "Timslot Sucessfully Deleted"})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "Timelsot Cannot be Deleted. Try again"})
    }
}