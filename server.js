const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get('/home', (req,res)=>{
res.sendFile(path.join(__dirname,"./public/home/index.html"))
})

app.get('/about', (req,res)=>{
res.sendFile(path.join(__dirname,"./public/about/index.html"))
})

app.get('/courses', (req,res)=>{
res.sendFile(path.join(__dirname,"./public/courses/index.html"))
})

app.get('/event', (req,res)=>{
res.sendFile(path.join(__dirname,"./public/event/index.html"))
})

app.get('/bootcamp', (req,res)=>{
res.sendFile(path.join(__dirname,"./public/bootcamp/index.html"))
})

app.get('/contact', (req,res)=>{
res.sendFile(path.join(__dirname,"./public/contact/index.html"))
})


app.listen(5000, ()=>{
console.log("server is running on http://localhost:5000")
})