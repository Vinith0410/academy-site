const express = require("express")
const Certificate = require("../models/Certificate")
const router = express.Router()
const path = require("path")
const fs = require("fs")
const QRCode = require("qrcode")

// Function to generate certificate ID in format: CERT_BFA_XXYYZZ[randomstring]
function generateCertificateId() {
  // Fixed two-digit numbers
  const parts = ['04', '05', '06']

  // Shuffle them
  const shuffled = parts.sort(() => Math.random() - 0.5)

  // Generate random alphanumeric string (9 chars)
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''
  for (let i = 0; i < 9; i++) {
    randomString += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  // Final certificate ID
  return `CERT_BFA_${shuffled.join('')}${randomString}`
}


// GET - Display certificate form
router.get("/add-Certificate", async(req,res)=>{
  if (!req.session.userid) {
      return res.send(`
        <script>
          alert("You are not authorized person to accesses")
          window.location.href = "/"
        </script>
      `)
    }
    res.sendFile(path.join(__dirname, "../public/admin/pages/certificate.html"))

})

// POST - Generate certificate and store in DB with QR code
router.post("/admin/pages/certificate", async(req,res)=>{
  try {
    if (!req.session.userid) {
      return res.status(401).send("Unauthorized access")
    }

    const { studentid, batch, name, gender, course, coursetype, startingtime, endingtime, aboutstudents, aboutcourse, additionalinformation } = req.body

    // Create QR code directory if it doesn't exist
    const qrCodeDir = path.join(__dirname, "../public/uploads/qrcode")
    if (!fs.existsSync(qrCodeDir)) {
      fs.mkdirSync(qrCodeDir, { recursive: true })
    }

    // Create new certificate document first to get the ID
    const newCertificate = new Certificate({
      certificateId: generateCertificateId(),
      studentid,
      batch,
      name,
      gender,
      course,
      coursetype,
      startingtime,
      endingtime,
      aboutstudents,
      aboutcourse,
      additionalinformation: additionalinformation || "",
      qrData: "" // Will update this after saving
    })

    // Save to get the MongoDB ID
    const savedCertificate = await newCertificate.save()

    // Create QR code URL with the MongoDB ID
    const baseUrl = "https://brightfutureacad.in" // Change to your domain
    const certificateUrl = `${baseUrl}/certificate/details/${savedCertificate._id}`

    // Update the QR data in the database
    savedCertificate.qrData = certificateUrl

    // Generate QR code image
    const qrCodeFileName = `${savedCertificate._id}.png`
    const qrCodePath = path.join(qrCodeDir, qrCodeFileName)

    // Generate and save QR code
    await QRCode.toFile(qrCodePath, certificateUrl, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 0.95,
      margin: 1,
      width: 300
    })

    // Save the updated certificate with QR code path
    await savedCertificate.save()

    res.status(201).json({
      success: true,
      message: "Certificate generated successfully",
      certificateId: savedCertificate._id,
      qrCode: `/uploads/qrcode/${qrCodeFileName}`,
      certificateUrl: certificateUrl
    })

  } catch (error) {
    console.error("Error generating certificate:", error)
    res.status(500).json({
      success: false,
      message: "Error generating certificate",
      error: error.message
    })
  }
})

// GET - View certificate details by ID
router.get("/details/:id", async(req,res)=>{
  try {
    // Serve the client-side HTML page which will fetch the certificate data
    return res.sendFile(path.join(__dirname, "../public/admin/pages/certificatedata.html"))
  } catch (error) {
    console.error("Error fetching certificate:", error)
    res.status(500).send("Error loading certificate")
  }
})

// GET - Return certificate data as JSON for client-side rendering
router.get('/data/:id', async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id)
    if (!certificate) return res.status(404).json({ error: 'Certificate not found' })
    res.json(certificate)
  } catch (err) {
    console.error('Error fetching certificate data:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET - List all certificates
router.get('/list', async (req, res) => {
  try {
    if (!req.session.userid) {
      return res.status(401).json({ error: 'Unauthorized access' })
    }

    const certificates = await Certificate.find().sort({ submittedAt: -1 })
    res.json(certificates)
  } catch (err) {
    console.error('Error fetching certificates:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET - Display read certificates table
router.get('/read-certificates', async (req, res) => {
  if (!req.session.userid) {
    return res.send(`
      <script>
        alert("You are not authorized person to access")
        window.location.href = "/"
      </script>
    `)
  }
  res.sendFile(path.join(__dirname, "../public/admin/pages/read-certificate.html"))
})

// GET - Display edit certificate form
router.get('/edit/:id', async (req, res) => {
  if (!req.session.userid) {
    return res.send(`
      <script>
        alert("You are not authorized person to access")
        window.location.href = "/"
      </script>
    `)
  }
  res.sendFile(path.join(__dirname, "../public/admin/pages/editcertificate.html"))
})

// PUT - Update certificate
router.put('/update/:id', async (req, res) => {
  try {
    if (!req.session.userid) {
      return res.status(401).json({ success: false, message: "Unauthorized access" })
    }

    const { studentid, batch, name, gender, course, coursetype, startingtime, endingtime, aboutstudents, aboutcourse, additionalinformation } = req.body

    const updatedCertificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      {
        studentid,
        batch,
        name,
        gender,
        course,
        coursetype,
        startingtime,
        endingtime,
        aboutstudents,
        aboutcourse,
        additionalinformation: additionalinformation || ""
      },
      { new: true }
    )

    if (!updatedCertificate) {
      return res.status(404).json({ success: false, message: "Certificate not found" })
    }

    res.json({
      success: true,
      message: "Certificate updated successfully",
      certificate: updatedCertificate
    })
  } catch (error) {
    console.error("Error updating certificate:", error)
    res.status(500).json({
      success: false,
      message: "Error updating certificate",
      error: error.message
    })
  }
})

// DELETE - Delete certificate
router.delete('/delete/:id', async (req, res) => {
  try {
    if (!req.session.userid) {
      return res.status(401).json({ success: false, message: "Unauthorized access" })
    }

    const certificate = await Certificate.findByIdAndDelete(req.params.id)

    if (!certificate) {
      return res.status(404).json({ success: false, message: "Certificate not found" })
    }

    // Delete QR code file if exists
    const qrCodePath = path.join(__dirname, `../public/uploads/qrcode/${certificate._id}.png`)
    if (fs.existsSync(qrCodePath)) {
      fs.unlinkSync(qrCodePath)
    }

    res.json({
      success: true,
      message: "Certificate deleted successfully"
    })
  } catch (error) {
    console.error("Error deleting certificate:", error)
    res.status(500).json({
      success: false,
      message: "Error deleting certificate",
      error: error.message
    })
  }
})

module.exports = router;
