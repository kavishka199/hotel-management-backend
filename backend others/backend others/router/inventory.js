const router = require('express').Router();
const Inventory = require('../models/Inventory');

/*
*@CREATE 
*/
router.post("/", async(req,res)=>{
    
        const newInventory =new Inventory(req.body);
            try{
                const saveUser = await newInventory.save();
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
                const updateInventory = await Inventory.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                { new:true }
                );
                res.status(201).json(updateInventory);
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@DELETE
*/
router.delete("/:id", async(req,res)=>{
            try{
                await Inventory.findByIdAndDelete(req.params.id);
                res.status(200).json("The Inventory has been deleted...");
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@Find Inventory
*/
router.get("/find/:id", async(req,res)=>{
            try{
                const getInventory =await Inventory.findById(
                    req.params.id
                );
                res.status(201).json(getInventory);
            }catch(err){
                res.status(500).json(err);
            }

});

/*
*@Find Inventory
*/
router.get("/",  async(req,res)=>{
    try{
        const getInventory =await Inventory.find();
        res.status(201).json(getInventory);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router