const express = require('express');
require('dotenv').config()

// express app
const app = express()

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

// route
app.get('/',(req, res)=>{
    res.json({message:'welcone to the app!!'})
})
// listen to port request
app.listen(process.env.PORT, ()=>{
    console.log('listening on port 5000');
})