const express = require("express");
const Application = require("../models/application");
const { sendCourseApplicationEmail, sendCourseAdminNotification } = require("../services/emailService");
const router = express.Router();

// Course application submit
router.post("/", async (req, res) => {
  const { fullName, email, phone, programType, title } = req.body;

  try {
    // 1. Save to DB
    await new Application({
      name: fullName,
      email,
      phone,
      programType,
      programTitle: title
    }).save();

    // 2. Send user email (await)
    await sendCourseApplicationEmail(fullName, email, title);

    // 3. Respond immediately
    res.json({ success: true, message: "Application submitted successfully" });

    // 4. Send admin notification (background)
    sendCourseAdminNotification(fullName, email, phone, title, programType);

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to submit application" });
  }
});

module.exports = router;
