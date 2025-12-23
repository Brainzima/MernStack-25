import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to server...")
})

app.listen(5000, ()=>{
    console.log("server is running on http://localhost:5000")
})