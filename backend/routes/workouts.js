const express = require('express');

const router = express.Router();
// get all workouts
router.get('/',(req,res)=>{
    res.json({massage:'get all workouts'})
});

// get single workout
router.get('/:id',(res,req) => {
    res.json({message:'get a single workout'})
})

module.exports = router