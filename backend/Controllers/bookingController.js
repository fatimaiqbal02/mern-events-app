import Booking from '../models/Booking.js'

//1) TO CREATE A BOOKING
export const createBooking = async (req, res)=>{

    const newBooking = new Booking(req.body)

    try{
        const savedBooking = await newBooking.save()
        res.status(200).json({status: "success", success:"true", 
                                 message: "Your Booking is Booked", data: savedBooking})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                                 message: "Failed to Book Booking"})
    }
}

//2) TO GET BOOKING DETAILS BY ID
export const getBooking = async (req, res)=>{

    const id = req.params.id

    try{
        const singleBooking = await Booking.findById(id)
        res.status(200).json({status: "success", success:"true", 
                                 message: "Succesful", data: singleBooking})

    }catch(err){
        res.status(404).json({status: "failed", success:"false", 
                                 message: "Booking Not Found"})
    }
}

//3) TO GET All BOOKINGS DETAILS
export const getAllBookings = async (req, res)=>{

    try{
        const allBookings = await Booking.find()
        res.status(200).json({status: "success", success:"true", 
                                 message: "Succesful", count: allBookings.length, data: allBookings})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                                 message: "Internal Server Error"})
    }
}

//4) TO DELETE A BOOKING
export const deleteBooking = async (req, res) =>{

    const id = req.params.id

    try{
        await Booking.findByIdAndDelete(id)
        res.status(200).json({status: "success", success:"true", 
                             message: "Booking Sucessfully Deleted"})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "Booking Cannot be Deleted. Try again"})
    }
}

//5) TO UPDATE A BOOKING
export const updateBooking = async (req, res) =>{

    const id = req.params.id

    try{
        const updateBooking = await Booking.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({status: "success", success:"true", 
                             message: "Booking Sucessfully Updated", data: updateBooking})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "Booking Cannot be Updated. Try again"})
    }
}