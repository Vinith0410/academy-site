const express = require("express")
const path = require("path")
const bcryptjs = require("bcryptjs")
const mongoose = require("mongoose")
const multer = require("multer")
const fs = require("fs")
const User = require("./models/User")
const Course = require("./models/course")
const session = require("express-session")


const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// session create
app.use(session({
  secret:"my-secret",
  resave:false,
  saveUninitialized:false
}))

// mongo db connection
mongoose.connect("mongodb://127.0.0.1:27017/brightfuture-data")
.then(()=>{
  console.log("database connected")
})
.catch(()=>{
  console.log("database not connected")
})

// image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// admin routes
app.get('/', (req,res)=>{
res.sendFile(path.join(__dirname,"./public/admin/auth/login.html"))
})
// app.get("/register", (req,res)=>{
// res.sendFile(path.join(__dirname,"./public/admin/auth/register.html"))
// })

app.get("/admin/courses", (req,res)=>{
  if(!req.session.userid){
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
res.sendFile(path.join(__dirname,"./public/admin/pages/courses.html"))
})

app.get("/admin/courses/add", (req,res)=>{
  if(!req.session.userid){
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
res.sendFile(path.join(__dirname,"./public/admin/pages/add-courses.html"))
})

app.get("/admin/courses/edit", (req,res)=>{
  if(!req.session.userid){
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
res.sendFile(path.join(__dirname,"./public/admin/pages/edit.html"))
})

// public routes
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

// admin login
app.post("/admin/auth/login", async (req,res)=>{
  const {email, password} = req.body
  const user = await User.findOne({email})
  if(!user){
    return res.send(`
      <script>
        alert("User not found")
        window.location.href = "/"
      </script>
    `)
  }
  const isPasswordValid = await bcryptjs.compare(password, user.password)
  if(isPasswordValid){
    req.session.userid = user._id
  res.send(`
    <script>
      alert("Login successful")
      window.location.href = "/admin/courses"
    </script>
  `)
  }else{
    return res.send(`
      <script>
        alert("wrong password")
        window.location.href = "/"
      </script>
    `)
  }
})

//admin logout
app.get("/admin/auth/logout", (req,res)=>{
  req.session.destroy()
  res.send(`
    <script>
      alert("Logout successful")
      window.location.href = "/"
    </script>
  `)
})

// admin register
// app.post("/admin/auth/register", async (req,res)=>{
//   const {name, email, password} = req.body
//   // console.log(name, email, password)
//   const hashedPassword = await bcryptjs.hash(password, 10)
//   // console.log(hashedPassword)
//   const user = new User({name, email, password:hashedPassword})
//   await user.save()
//   res.send("User registered successfully")
// })

// course data store
app.post("/admin/courses/add", upload.single('img'), async (req,res)=>{
  if(!req.session.userid){
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
  const {name, price, oldPrice, duration, tag, desc} = req.body
  const image = req.file ? req.file.filename : null;
  const point = req.body.points.split(',').map(point => point.trim());
  if(!image){
    return res.send(`
      <script>
        alert("Please upload an image for the course")
        window.location.href = "/admin/courses/add"
      </script>
    `)
  }
  try{
    const course = new Course({name, price, oldPrice, duration, img:image, tag, desc, points:point})
    await course.save()
    res.send(`
      <script>
        alert("Course added successfully")
        window.location.href = "/admin/courses"
      </script>
    `)
  }catch(err){
    console.error(err)
    res.send(`
      <script>
        alert("Failed to add course:", err)
        window.location.href = "/admin/courses/add"
      </script>
    `)
  }
})

// get all courses
app.get("/admin/courses/data", async (req,res)=>{
  const courses = await Course.find()
  res.json(courses)
})

//get data
app.get("/admin/courses/data/:id" , async(req,res)=>{
  if(!req.session.userid){
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
  const id = req.params.id
  const course = await Course.findById(id)
  res.json(course)
})

// edit or update
app.post("/admin/courses/update", upload.single('img'), async (req,res)=>{
const {id, name, price, oldPrice, duration, tag, desc} = req.body
let image;
if(!id){
  return res.send(`
    <script>
      alert("Please provide a course ID")
      window.location.href = "/admin/courses"
    </script>
  `)
}else{
  const course = await Course.findById(id)
  if(!course){
    return res.send(`
      <script>
        alert("Course not found")
        window.location.href = "/admin/courses"
      </script>
    `)
  }
  console.log(course.img)
  if(req.file){
     const imagepath = path.join(__dirname, "public/uploads", course.img);
    if(fs.existsSync(imagepath)){
      fs.unlinkSync(imagepath)
    }
    image = req.file.filename;
  }else{
    image = course.img;
  }
}
const point = req.body.points.split(',').map(point => point.trim());
try{
  await Course.findByIdAndUpdate(id, {name, price, oldPrice, duration, img:image, tag, desc, points:point})
  res.send(`
    <script>
      alert("Course updated successfully")
      window.location.href = "/admin/courses"
    </script>
  `)
}catch(err){
  console.error(err)
  res.send(`
    <script>
      alert("Failed to update course: ${err && err._message ? err._message : 'Validation error'}")
      window.location.href = "/admin/courses"
    </script>
  `)
}
})

// delete
app.delete("/admin/courses/delete/:id", async (req,res)=>{
  if(!req.session.userid){
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
  const id = req.params.id
  try{
    const course = await Course.findById(id)
    if(!course){
      return res.send(`
        <script>
          alert("Course not found")
          window.location.href = "/admin/courses"
        </script>
      `)
    }
    const imagepath = path.join(__dirname, "public/uploads", course.img);
    if(fs.existsSync(imagepath)){
      fs.unlinkSync(imagepath)
    }
    await Course.findByIdAndDelete(id)
    res.send(`
      <script>
        alert("Course deleted successfully")
        window.location.href = "/admin/courses"
      </script>
    `)
  }catch(err){
    console.error(err)
    res.send(`
      <script>
        alert("Failed to delete course:", err)
        window.location.href = "/admin/courses"
      </script>
    `)
  }
})

app.listen(5000, ()=>{
console.log("server is running on http://localhost:5000")
})
