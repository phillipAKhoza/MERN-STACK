const express = require('express');

const router = express.Router();
// get all workouts
router.get('/',(req,res)=>{
    res.json({massage:'get all workouts'})
});

// get single workout
router.get('/:id',(res,req) => {
    res.json({message:'get a single workout'})
});

// POST new workout
router.post('/',(res,req) => {
    res.json({message:'post a new workout'})
});

// DELETE a workout
router.delete('/:id',(res,req) => {
    res.json({message:'DELETE workout'})
});

// UPDATE a workout
router.patch('/:id',(res,req) => {
    res.json({message:'UPDATE workout'})
});


module.exports = router