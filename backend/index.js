import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import userRoute from './routes/users.js'
import eventRoute from './routes/events.js'
import reviewRoute from './routes/reviews.js'

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
app.use(express.json())

//routes
app.get('/', (req,res)=>{
    res.send('Api working succesfully')
})

//setting route for User
app.use('/api/v1/users', userRoute)

//setting route for Event
app.use('/api/v1/events', eventRoute)

//setting route for Review
app.use('/api/v1/review', reviewRoute)


//starting the server
app.listen(portNo, (err)=>{
    connect()
    console.log('Server listening on port No '+portNo)
})
