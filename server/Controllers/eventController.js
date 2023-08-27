import Event from '../models/Event.js'

//1) TO CREATE A NEW EVENT
export const createNewEvent = async (req, res)=>{

    const newEvent = Event(req.body)

    try{
        const savedEvent = await newEvent.save()
        res.status(201).json({status: "success", success:"true", 
                             message: "Event Sucessfully Created", data: savedEvent})

    }catch(err){
        res.status(500).json({status: "failed", success:"false",
                             message: "Event Cannot be Created. Try again"})
    }
}

//2) TO UPDATE A EVENT
export const updateEvent = async (req, res) =>{

    const id = req.params.id

    try{
        const updateEvent = await Event.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({status: "success", success:"true", 
                             message: "Event Sucessfully Updated", data: updateEvent})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "Event Cannot be Updated. Try again"})
    }
}

//3) TO DELETE A EVENT
export const deleteEvent = async (req, res) =>{

    const id = req.params.id

    try{
        await Event.findByIdAndDelete(id)
        res.status(200).json({status: "success", success:"true", 
                             message: "Event Sucessfully Deleted"})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "Event Cannot be Deleted. Try again"})
    }
}

//4) TO GET A SINGLE EVENT
export const getSingleEvent = async (req, res) =>{

    const id = req.params.id

    try{
        const singleEvent = await Event.findById(id)
        res.status(200).json({status: "success", success:"true", 
                             message: "Sucessful", data: singleEvent})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: Event Data Not Found."})
    }
}

//5) TO GET ALL EVENTS
export const getAllEvents = async (req, res) =>{

    //for pagination
    const page = parseInt(req.query.page)
    //console.log(page)

    try{
        const allEvents = await Event.find({}).skip(page * 8).limit(8)
        res.status(200).json({status: "success", success:"true", count: allEvents.length,
                             message: "Sucessful", data: allEvents})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: Data Not Found."})
    }
}

//6) TO GET EVENTS BY SEARCH
export const getEventsBySearch = async(req, res)=>{

    const name = new RegExp(req.query.name, 'i')
    const area = req.query.area
    const maxGuestSize = parseInt(req.query.maxGuestSize)

    try{
        const Events = await Event.find({name, address: { $regex: area, $options: 'i' },
                                         maxGuestSize:{$gte: maxGuestSize}})
        res.status(200).json({status: "success", success:"true",
                             message: "Sucessful", data: Events})

    }catch(err){
        res.status(404).json({status: "failed", success:"false",
                            message: "Error: Data Not Found."})
    }
}

//7) TO GET ONLY FEATURED EVENTS
export const getFeaturedEvents = async (req, res) =>{

    try{
        const FeaturedEvents = await Event.find({featured: true}).limit(8)
        res.status(200).json({status: "success", success:"true", count: FeaturedEvents.length,
                             message: "Sucessful", data: FeaturedEvents})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: Data Not Found."})
    }
}

//8) TO GET EVENTS COUNT
export const getEventsCount = async (req, res)=>{

    try{
        const EventCount = await Event.estimatedDocumentCount()
        res.status(200).json({status: "success", success:"true",
                             message: "Sucessful",data: EventCount})

    }catch(err){
        res.status(500).json({status: "failed", success:"false",
                             message: "Error: Failed to Fetch."})
    }
}

