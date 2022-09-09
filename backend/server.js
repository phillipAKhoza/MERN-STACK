const express = require('express');

// express app
const app = express()

// route
app.get('/',(req, res)=>{
    res.json({message:'welcone to the app'})
})
// listen to port request
app.listen(5000, ()=>{
    console.log('listening on port 5000');
})