const router = require("express").Router();
const res = require("express/lib/response");
let Stock = require("../models/Stock.model");

//Insert stock details

http://localhost:8070/Stock/add

router.route("/add").post((req, res)=>{
    //body
    const itemCode = req.body.itemCode;
    const itemName= req.body.itemName;
    const garmentQuantity = req.body.garmentQuantity;
    const month = req.body.month;
    const priceEach = req.body. priceEach;
    const garmentStatus = req.body.garmentStatus; 
    

     //create a object of model
    const newStock = new Stock({
        itemCode,
        itemName,
        garmentQuantity,
        month,
        priceEach,
        garmentStatus
    })

    //pass the object to mongodb
    newStock.save().then(()=>{
        res.json("Stock Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//display Stock details

http://localhost:8070/Stock

router.route("/").get((req, res)=>{
    //body
    Stock.find().then((stocks)=>{
        res.json(stocks)
    }).catch((err)=> {
        console.log(err)
    })

})

//Update stock details

http://localhost:8070/Stock/update/

router.route("/update/:id").put(async(req, res)=>{
    let stockid = req.params.id;  //fetch the backend url id
    //Destructure in js
    const {itemCode,itemName,garmentQuantity,month,priceEach,garmentStatus} = req.body;

    const updateStock= {
        itemCode,
        itemName,
        garmentQuantity,
        month,
        priceEach,
        garmentStatus
    }
    
    const update = await Stock.findByIdAndUpdate(stockid, updateStock).then(()=> {
        res.status(200).send({status: "Stock Updated"})
    }).catch((err)=> {
        console.log(err)
        res.status(500).send({status: "Error with updating data", error: err(message) })
    })
})
 //Delete Stock
 
 http://localhost:8070/Stock
 router.route("/delete/:id").delete(async(req, res)=> {
     let stockid = req.params.id;
     await Stock.findByIdAndDelete(stockid).then(()=>{
         res.status(200).send({status: "Stock deleted"})
     }).catch((err)=> {
        console.log(err.message)
        res.status(500).send({status: "Error with updating data", error: err(message)})
    })
 })

 http://localhost:8070/Stock
router.route("/get/:id").get(async(req, res)=> {
    let stockid = req.params.id;
    const sto = await Stock.findById(stockid)
    .then((stocks)=> {
        res.status(200).send({status: "Stock fetched", stocks})
    }).catch(()=> {
        console.log(eer.message);
        res.status(500).send({status: "Error with get stock", error: err(message)})
    })
})


module.exports = router;