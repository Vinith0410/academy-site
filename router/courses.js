const express = require("express")
const path = require("path")
const multer = require("multer")
const fs = require("fs")
const Course = require("../models/course")
const router = express.Router()

// Configure image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Add course
router.post("/add", upload.single('img'), async (req, res) => {
  if (!req.session.userid) {
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
  const { name, price, oldPrice, duration, tag, desc } = req.body
  const image = req.file ? req.file.filename : null;
  const point = req.body.points.split(',').map(point => point.trim());
  if (!image) {
    return res.send(`
      <script>
        alert("Please upload an image for the course")
        window.location.href = "/admin/courses/add"
      </script>
    `)
  }
  try {
    const course = new Course({ name, price, oldPrice, duration, img: image, tag, desc, points: point })
    await course.save()
    res.send(`
      <script>
        alert("Course added successfully")
        window.location.href = "/admin/courses"
      </script>
    `)
  } catch (err) {
    console.error(err)
    res.send(`
      <script>
        alert("Failed to add course:", err)
        window.location.href = "/admin/courses/add"
      </script>
    `)
  }
})

// Get all courses
router.get("/data", async (req, res) => {
  const courses = await Course.find()
  res.json(courses)
})

// Get single course by ID
router.get("/data/:id", async (req, res) => {
  if (!req.session.userid) {
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

// Update course
router.post("/update", upload.single('img'), async (req, res) => {
  const { id, name, price, oldPrice, duration, tag, desc } = req.body
  let image;
  if (!id) {
    return res.send(`
      <script>
        alert("Please provide a course ID")
        window.location.href = "/admin/courses"
      </script>
    `)
  } else {
    const course = await Course.findById(id)
    if (!course) {
      return res.send(`
        <script>
          alert("Course not found")
          window.location.href = "/admin/courses"
        </script>
      `)
    }
    if (req.file) {
      const imagepath = path.join(__dirname, "../public/uploads", course.img);
      if (fs.existsSync(imagepath)) {
        fs.unlinkSync(imagepath)
      }
      image = req.file.filename;
    } else {
      image = course.img;
    }
  }
  const point = req.body.points.split(',').map(point => point.trim());
  try {
    await Course.findByIdAndUpdate(id, { name, price, oldPrice, duration, img: image, tag, desc, points: point })
    res.send(`
      <script>
        alert("Course updated successfully")
        window.location.href = "/admin/courses"
      </script>
    `)
  } catch (err) {
    console.error(err)
    res.send(`
      <script>
        alert("Failed to update course: ${err && err._message ? err._message : 'Validation error'}")
        window.location.href = "/admin/courses"
      </script>
    `)
  }
})

// Delete course
router.delete("/delete/:id", async (req, res) => {
  if (!req.session.userid) {
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
  const id = req.params.id
  try {
    const course = await Course.findById(id)
    if (!course) {
      return res.send(`
        <script>
          alert("Course not found")
          window.location.href = "/admin/courses"
        </script>
      `)
    }
    const imagepath = path.join(__dirname, "../public/uploads", course.img);
    if (fs.existsSync(imagepath)) {
      fs.unlinkSync(imagepath)
    }
    await Course.findByIdAndDelete(id)
    res.send(`
      <script>
        alert("Course deleted successfully")
        window.location.href = "/admin/courses"
      </script>
    `)
  } catch (err) {
    console.error(err)
    res.send(`
      <script>
        alert("Failed to delete course:", err)
        window.location.href = "/admin/courses"
      </script>
    `)
  }
})

module.exports = router
