const express = require("express")
const bcryptjs = require("bcryptjs")
const User = require("../models/User")
const router = express.Router()
const path = require("path")

// Login form
router.get('/loginform', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/admin/auth/login.html"))
})
router.get('/registerform', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/admin/auth/register.html"))
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

// Admin register
router.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    return res.send(`
      <script>
        alert("User already exists")
        window.location.href = "/admin/registerform"
      </script>
    `)
  }
  const hashedPassword = await bcryptjs.hash(password, 10)
  const newUser = new User({ name, email, password: hashedPassword })
  await newUser.save()
  res.send(`
    <script>
      alert("Registration successful")
      window.location.href = "/admin/loginform"
    </script>
  `)
})

router.get("/auth/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send(`
        <script>
          alert("Logout failed")
          window.location.href = "/admin/courses"
        </script>
      `)
    }

    res.clearCookie("connect.sid") // optional but recommended

    res.send(`
      <script>
        alert("Logged out successfully")
        window.location.href = "/admin/loginform"
      </script>
    `)
  })
})


// Serve admin pages
router.get("/courses", (req, res) => {
  const path = require("path")
  if (!req.session.userid) {
    return res.send(`
      <script>
        alert("Please login first")
        window.location.href = "/admin/loginform"
      </script>
    `)
  }
  res.sendFile(path.join(__dirname, "../public/admin/pages/courses.html"))
})

router.get("/courses/add", (req, res) => {
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
