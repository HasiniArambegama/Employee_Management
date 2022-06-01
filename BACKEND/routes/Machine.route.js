const router = require("express").Router();
const res = require("express/lib/response");
let Machine = require("../models/Machine.model");

router.route("/add").post((req, res)=>{
    const machineName = req.body.machineName;
    const machineModelNumber = req.body.machineModelNumber;
    const machineDepartment = req.body.machineDepartment;
    const machineSerialNumber = req.body.machineSerialNumber;
    const machineDate = req.body. machineDate;
    const newMachine = new Machine({
        machineName,
        machineModelNumber,
        machineDepartment,
        machineSerialNumber,
        machineDate
    })

    newMachine.save().then(()=>{
        res.json("Machine Added")
    }).catch((err)=>{
        console.log(err);
    })

})
router.route("/").get((req, res)=>{
    Machine.find().then((machine)=>{
        res.json(machine)
    }).catch((err)=> {
        console.log(err)
    })

})

router.route("/update/:id").put(async(req, res)=>{
    let empId = req.params.id;  
    const {machineName,machineModelNumber,machineDepartment,machineSerialNumber,machineDate,} = req.body;

    const updateMachine = {
        machineName,
        machineModelNumber,
        machineDepartment,
        machineDate,

    }
    
    const update = await Machine.findByIdAndUpdate(empId, updateMachine).then(()=> {
        res.status(200).send({status: "Machine Updated"})
    }).catch((err)=> {
        console.log(err)
        res.status(500).send({status: "Error with updating data", error: err(message) })
    })
})

 router.route("/delete/:id").delete(async(req, res)=> {
     let machineId = req.params.id;
     await Machine.findByIdAndDelete(machineId).then(()=>{
         res.status(200).send({status: "Machine deleted"})
     }).catch((err)=> {
        console.log(err.message)
        res.status(500).send({status: "Error with updating data", error: err(message)})
    })
 })

router.route("/get/:id").get(async(req, res)=> {
    let machineId = req.params.id;
    const emp = await Machine.findById(machineId)
    .then((machines)=> {
        res.status(200).send({status: "Machine fetched", machines})
    }).catch(()=> {
        console.log(eer.message);
        res.status(500).send({status: "Error with get machine", error: err(message)})
    })
})


module.exports = router;