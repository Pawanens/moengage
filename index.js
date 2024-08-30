import express from 'express';

const app = express();
app.use(express.json());


const port = 3000;
app.post("/order", (req, res)=>{
    // const {Name , Email} =req.body
    const requestData = req.body;
    console.log("checkdata" ,requestData)
    // console.log("Name" , Name)
    // console.log("Email" , Email)
    res.send({
        "requestData":requestData
    })
})
app.post("/checkout_update", (req, res)=>{
    // const {Name , Email} =req.body
    const requestData = req.body;
    console.log("checkout_update" ,requestData)
    // console.log("Name" , Name)
    // console.log("Email" , Email)
    res.send({
        "requestData":requestData
    })
})
app.post("/checkout_create", (req, res)=>{
    // const {Name , Email} =req.body
    const requestData = req.body;
    console.log("checkout_create" ,requestData)
    // console.log("Name" , Name)
    // console.log("Email" , Email)
    res.send({
        "requestData":requestData
    })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




