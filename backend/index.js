import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
const portNo = process.env.PORTNO || 8000

//database connection
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Mongodb Database Connected Succesfully")
    }catch(error){
        console.log("Mongodb Database Connection Failed")
    }
}


//middlewares
app.use(express())

//routes
app.get('/', (req,res)=>{
    res.send('Api working succesfully')
})

//starting the server
app.listen(portNo, (err)=>{
    connect()
    console.log('Server listening on port No '+portNo)
})
