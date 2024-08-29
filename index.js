import express from 'express';

const app = express();
app.use(express.json());


const port = 3000;
app.post("/data", (req, res)=>{
    // const {Name , Email} =req.body
    const requestData = req.body;
    console.log("checkdata" ,requestData)
    // console.log("Name" , Name)
    // console.log("Email" , Email)
    res.send({
        "requestData":requestData
    })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




