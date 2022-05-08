const router = require('express').Router();
const Package = require('../models/Package');

/*
*@CREATE 
*/
router.post("/", async(req,res)=>{
    
        const newPackage =new Package(req.body);
            try{
                const saveUser = await newPackage.save();
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
                const updatePackage = await Package.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                { new:true }
                );
                res.status(201).json(updatePackage);
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@DELETE
*/
router.delete("/:id", async(req,res)=>{
            try{
                await Package.findByIdAndDelete(req.params.id);
                res.status(200).json("The Package has been deleted...");
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@Find Package
*/
router.get("/find/:id", async(req,res)=>{
            try{
                const getPackage =await Package.findById(
                    req.params.id
                );
                res.status(201).json(getPackage);
            }catch(err){
                res.status(500).json(err);
            }

});

/*
*@Find Package
*/
router.get("/",  async(req,res)=>{
    try{
        const getPackage =await Package.find();
        res.status(201).json(getPackage);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router