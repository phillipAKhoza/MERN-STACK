const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const workoutRoutes = require('./routes/workouts');


// express app
const app = express()

// middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

// route
app.use('/api/workouts',workoutRoutes)

// Connect to mogoose
mongoose.connect(process.env.MONGO_URI);


// listen to port request
app.listen(process.env.PORT, ()=>{
    console.log('listening on port 5000');
})