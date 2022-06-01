
const router = require("express").Router();
const res = require("express/lib/response");
let Supplier = require("../models/Supplier.model");

//Insert supplier details

http://localhost:8070/Supplier/add

router.route("/add").post((req, res)=>{
    //body
    const supplierID = req.body.supplierID;
    const modelID = req.body.modelID;
    const Squantity = req.body.Squantity;
    const Samount = req.body.Samount;
    const Sdate = req.body. Sdate;
    const CreditPeriod = req.body.CreditPeriod; 

     //create a object of model
    const newSupplier = new Supplier({
        supplierID,
        modelID ,
        Squantity,
        Samount,
        Sdate,
        CreditPeriod
    })

    //pass the object to mongodb
    newSupplier.save().then(()=>{
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//display supplier details

http://localhost:8070/Supplier

router.route("/").get((req, res)=>{
    //body
    Supplier.find().then((suppliers)=>{
        res.json(suppliers)
    }).catch((err)=> {
        console.log(err)
    })

})

//Update supplier details

http://localhost:8070/Supplier/update/

router.route("/update/:id").put(async(req, res)=>{
    let supID = req.params.id;  //fetch the backend url id
    //Destructure in js
    const {supplierID, modelID , Squantity,Samount,Sdate,CreditPeriod} = req.body;

    const updateSupplier = {
        supplierID,
        modelID ,
        Squantity,
        Samount,
        Sdate,
        CreditPeriod
    }
    
    const update = await Supplier.findByIdAndUpdate(supID,updateSupplier).then(()=> {
        res.status(200).send({status: "Supplier Updated"})
    }).catch((err)=> {
        console.log(err)
        res.status(500).send({status: "Error with updating data", error: err(message) })
    })
})
 //Delete Supplier
 
 http://localhost:8070/Supplier
 router.route("/delete/:id").delete(async(req, res)=> {
     let supID = req.params.id;
     await Supplier.findByIdAndDelete(supID).then(()=>{
         res.status(200).send({status: "Supplier deleted"})
     }).catch((err)=> {
        console.log(err.message)
        res.status(500).send({status: "Error with updating data", error: err(message)})
    })
 })

 http://localhost:8070/Supplier
router.route("/get/:id").get(async(req, res)=> {
    let supID = req.params.id;
    const sup = await Supplier.findById(supID)
    .then((suppliers)=> {
        res.status(200).send({status: "Supplier fetched", suppliers})
    }).catch(()=> {
        console.log(eer.message);
        res.status(500).send({status: "Error with get supplier", error: err(message)})
    })
})


module.exports = router;