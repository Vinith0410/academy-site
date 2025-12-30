const express = require("express")
const bcryptjs = require("bcryptjs")
const User = require("../models/User")
const router = express.Router()

// Login form
router.get('/loginform', (req, res) => {
  const path = require("path")
  res.sendFile(path.join(__dirname, "../public/admin/auth/login.html"))
})

// Admin login
router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.send(`
      <script>
        alert("User not found")
        window.location.href = "/"
      </script>
    `)
  }
  const isPasswordValid = await bcryptjs.compare(password, user.password)
  if (isPasswordValid) {
    req.session.userid = user._id
    res.send(`
      <script>
        alert("Login successful")
        window.location.href = "/admin/courses"
      </script>
    `)
  } else {
    return res.send(`
      <script>
        alert("wrong password")
        window.location.href = "/"
      </script>
    `)
  }
})

// Admin logout
router.get("/auth/logout", (req, res) => {
  req.session.destroy()
  res.send(`
    <script>
      alert("Logout successful")
      window.location.href = "/"
    </script>
  `)
})

// Serve admin pages
router.get("/courses", (req, res) => {
  const path = require("path")
  if (!req.session.userid) {
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
  res.sendFile(path.join(__dirname, "../public/admin/pages/courses.html"))
})

router.get("/courses/add", (req, res) => {
  const path = require("path")
  if (!req.session.userid) {
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
  res.sendFile(path.join(__dirname, "../public/admin/pages/add-courses.html"))
})

router.get("/courses/edit", (req, res) => {
  const path = require("path")
  if (!req.session.userid) {
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/"
      </script>
    `)
  }
  res.sendFile(path.join(__dirname, "../public/admin/pages/edit.html"))
})

module.exports = router
