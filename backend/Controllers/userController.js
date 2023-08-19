import User from '../models/User.js'

//1) TO CREATE A NEW USER
export const createNewUser = async (req, res)=>{

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,  
        password: req.body.password,                                 
        role: req.body.role ? req.body.role : "user",
        photo: req.body.photo
    })

    try{
        const savedUser = await newUser.save()
        res.status(201).json({status: "success", success:"true", 
                             message: "User Sucessfully Created", data: savedUser})

    }catch(err){
        res.status(500).json({status: "failed", success:"false",
                             message: "User Cannot be Created. Try again"})
    }
}

//2) TO UPDATE A USER
export const updateUser = async (req, res) =>{

    const id = req.params.id

    try{
        const updateUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({status: "success", success:"true", 
                             message: "User Sucessfully Updated", data: updateUser})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "User Cannot be Updated. Try again"})
    }
}

//3) TO DELETE A USER
export const deleteUser = async (req, res) =>{

    const id = req.params.id

    try{
        await User.findByIdAndDelete(id)
        res.status(200).json({status: "success", success:"true", 
                             message: "User Sucessfully Deleted"})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "User Cannot be Deleted. Try again"})
    }
}

//4) TO GET A SINGLE USER
export const getSingleUser = async (req, res) =>{

    const id = req.params.id

    try{
        const singleUser = await User.findById(id)
        res.status(200).json({status: "success", success:"true", 
                             message: "Sucessful", data: singleUser})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: User Data Not Found."})
    }
}

//5) TO GET ALL USERS
export const getAllUsers = async (req, res) =>{

    try{
        const allUsers = await User.find({})
        res.status(200).json({status: "success", success:"true",
                             message: "Sucessful", count: allUsers.length, data: allUsers})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: Data Not Found."})
    }
}