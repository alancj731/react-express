const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Info = require('./models/infoModel')

// set public folder
app.use(express.static('public'))
// parse json data format
app.use(express.json())
// parse url encoded data format
app.use(express.urlencoded({extended: false}))

app.get("/courseinfo", async (req, res) => {
    try {
        const infos = await Info.find({})
        res.status(200).json(infos)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

app.get("/courseinfo/:id", async (req, res) => {
    try {
        const {id} = req.params
        const info = await Info.findById(id)
        res.status(200).json(info)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

// update data
app.put("/courseinfo/:id", async (req, res) => {
    try {
        const {id} = req.params
        const info = await Info.findByIdAndUpdate(id, req.body)
        if (!info) {
            return res.status(404).json({message: `Can't update data with the ID of ${ids}`})
        }
        const updatedInfo = await Info.findById(id)
        res.status(200).json(updatedInfo)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

// create new data
app.post("/courseinfo", async (req, res) =>{
    console.log(req.body)
    try{
        const info = await Info.create(req.body)
        res.status(200).json(info)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
    // res.send(req.body["name"])
})

// delete data
app.delete("/courseinfo/:id", async (req, res) =>{
    console.log(req.body)
    try{
        const {id} = req.params
        const info = await Info.findByIdAndDelete(id)
        if (!info) {
            return res.status(404).json({message: `can't find any product with ID ${id}`})
        }
        res.status(200).json(info)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})



mongoose.connect("mongodb+srv://alanchenjian:mongodb@coursedb.gq9cnug.mongodb.net/CourseInfo?retryWrites=true&w=majority")
.then(() => {
    console.log("Mongodb Conected!")
    app.listen(5000, () => {console.log("Server started at port 5000!")})
})
.catch((error) => {
    console.log(error)
})