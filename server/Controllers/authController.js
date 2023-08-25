import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//1) USER REGISTRATION
export const register = async (req, res)=>{
    try{

        //hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,  
            password: hash,                                 //req.body.password
            role: req.body.role ? req.body.role : "user",
            photo: req.body.photo
        })

        const registerUser = await newUser.save()
        res.status(201).json({status: "success", success:"true", 
                             message: "User Sucessfully Registered", data: registerUser})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                             message: "User Cannot be Registered"})

    }
}

//2) USER LOGIN
export const login = async (req, res)=>{

    const email = req.body.email

    try{
        //getting the user
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({status: "failed", success:"false", 
                             message: "User Not Found"})
        }

        const checkPassword = await bcrypt.compare(req.body.password, user.password)
        if(!checkPassword){
            return res.status(401).json({status: "failed", success:"false", 
                             message: "Incorrect Email or Password"})
        }

        const{password, role, ...rest} = user._doc

        //creating jwt token
        const token = jwt.sign({id:user._id, role: user.role}, 
                                 process.env.JWT_SECRET_KEY, {expiresIn: "15d"})
        
        //setting token in cookies
        res.cookie('accessToken', token, {
            httpOnly: true,
            expiresIn: token.expiresIn
        }).status(200).json({status: "success", success:"true", 
                         message: "Login Succesful", token, data: {...rest}, role}) 

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                         message: "Failed to Login"})
    }
}

