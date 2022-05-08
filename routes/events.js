const router = require('express').Router();
const Event = require('../models/Event');

/*
*@CREATE 
*/
router.post("/", async(req,res)=>{
    
        const newEvent =new Event(req.body);
            try{
                const saveUser = await newEvent.save();
                res.status(200).json(saveUser);
            }catch(err){
                res.status(500).json(err);
            }
});
/*
*@UPDATE
*/
router.put("/:id", async(req,res)=>{
            try{
                const updateEvent = await Event.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                { new:true }
                );
                res.status(201).json(updateEvent);
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@DELETE
*/
router.delete("/:id", async(req,res)=>{
            try{
                await Event.findByIdAndDelete(req.params.id);
                res.status(200).json("The Event has been deleted...");
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@Find Event
*/
router.get("/find/:id", async(req,res)=>{
            try{
                const getEvent =await Event.findById(
                    req.params.id
                );
                res.status(201).json(getEvent);
            }catch(err){
                res.status(500).json(err);
            }

});

/*
*@Find Event
*/
router.get("/",  async(req,res)=>{
    try{
        const getEvent =await Event.find();
        res.status(201).json(getEvent);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router