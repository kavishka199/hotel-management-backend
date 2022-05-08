const router = require('express').Router();
const Room = require('../models/Room');

/*
*@CREATE 
*/
router.post("/", async(req,res)=>{
    
        const newRoom =new Room(req.body);
            try{
                const saveUser = await newRoom.save();
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
                const updateRoom = await Room.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                { new:true }
                );
                res.status(201).json(updateRoom);
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@DELETE
*/
router.delete("/:id", async(req,res)=>{
            try{
                await Room.findByIdAndDelete(req.params.id);
                res.status(200).json("The Room has been deleted...");
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@Find Room
*/
router.get("/find/:id", async(req,res)=>{
            try{
                const getRoom =await Room.findById(
                    req.params.id
                );
                res.status(201).json(getRoom);
            }catch(err){
                res.status(500).json(err);
            }

});

/*
*@Find Room
*/
router.get("/",  async(req,res)=>{
    try{
        const getRoom =await Room.find();
        res.status(201).json(getRoom);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router