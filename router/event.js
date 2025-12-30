const express = require("express");
const Application = require("../models/application");
const { sendEventApplicationEmail, sendEventAdminNotification } = require("../services/emailService");
const router = express.Router();

// Event application submit
router.post("/apply", async (req, res) => {
  const { name, email, phone, programType, title } = req.body;

  try {
    // 1. Save to DB
    const application = new Application({
      name,
      email,
      phone,
      programType,
      programTitle: title
    });
    await application.save();

    // 2. Send user email (await - important)
    await sendEventApplicationEmail(name, email, title);

    // 3. Send response immediately (fast UX)
    res.json({
      success: true,
      message: "Application submitted successfully"
    });

    // 4. Send admin notification (background - no await)
    sendEventAdminNotification(name, email, phone, title, programType);

  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      message: "Failed to submit application"
    });
  }
});

module.exports = router;
