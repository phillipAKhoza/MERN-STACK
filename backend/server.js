const express = require('express');
require('dotenv').config()
const workoutRoutes = require('./routes/workouts');

// express app
const app = express()

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

// route
app.use('/api/workouts',workoutRoutes)
// listen to port request
app.listen(process.env.PORT, ()=>{
    console.log('listening on port 5000');
})