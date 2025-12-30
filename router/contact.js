const express = require("express");
const Contact = require("../models/contact");
const { sendContactConfirmationEmail, sendContactAdminNotification } = require("../services/emailService");
const router = express.Router();

// Simple email format validator
const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
};

// Contact form endpoint
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  try {
    // 1. Save to DB
    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    // 2. Send confirmation email to user
    try {
      await sendContactConfirmationEmail(name, email, message);
    } catch (mailErr) {
      console.error('Contact user mail failed:', mailErr.message || mailErr);
      return res.status(500).json({ success: false, message: 'Message saved but confirmation email failed to send' });
    }

    // 3. Send response immediately
    res.json({ success: true, message: 'Message sent successfully' });

    // 4. Send admin notification (background)
    sendContactAdminNotification(name, email, phone, message);

  } catch (err) {
    console.error('Contact save error:', err);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

module.exports = router;
