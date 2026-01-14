const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const session = require("express-session")
const adminRouter = require("./router/admin")
const coursesRouter = require("./router/courses")
const CertificateRouter = require("./router/certificate")
const eventRouter = require("./router/event")
const applyRouter = require("./router/apply")
const contactRouter = require("./router/contact")
require("dotenv").config()
const PORT = process.env.PORT || 4000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))

// session create
app.use(session({
  secret:"Bright Future Academy",
  resave:false,
  saveUninitialized:false
}))

// mongo db connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("database connected")
})
.catch(()=>{
  console.log("database not connected")
})

// ============ ROUTERS ============
// use routers
app.use('/admin', adminRouter)
app.use("/Certificate", CertificateRouter)
app.use('/admin/courses', coursesRouter)
app.use('/event', eventRouter)
app.use('/apply', applyRouter)
app.use('/contact', contactRouter)

// ============ PUBLIC ROUTES ============
app.get('/', (req,res)=>{
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

// serve PDFs with correct MIME type
app.get('/pdfs/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, 'public/courses/pdfs', filename);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.sendFile(filepath, (err) => {
    if (err) {
      console.error('Error sending PDF:', err);
      res.status(404).json({ error: 'PDF not found' });
    }
  });
});


// serve sitemap
app.get("/sitemap.xml", (req, res) => {
  res.setHeader("Content-Type", "application/xml");
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});

app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "robots.txt"));
});


// ============ START SERVER ============
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
