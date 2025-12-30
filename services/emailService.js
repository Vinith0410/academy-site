const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Send event application email
const sendEventApplicationEmail = async (name, email, title) => {
  try {
    await transporter.sendMail({
      from: `"Bright Future Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Registering – Your Journey Begins 🚀",
      html: `
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for registering for <strong>${title}</strong>.</p>
        <p>
          You have taken a powerful step toward your future.
          Our team will contact you shortly.
        </p>
        <p>
          <strong>Bright Future Academy Team</strong>
        </p>
      `
    });
  } catch (err) {
    console.error("Error sending event application email:", err);
    throw err;
  }
};

// Send event admin notification
const sendEventAdminNotification = (name, email, phone, title, programType) => {
  transporter.sendMail({
    from: `"Bright Future Academy" <${process.env.EMAIL_USER}>`,
    to: "vinithvinith35614@gmail.com",
    subject: "📩 New Registration Alert",
    html: `
      <h3>New Event Registration</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Program:</strong> ${title}</p>
      <p><strong>Type:</strong> ${programType}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `
  }).catch(err => {
    console.error("Admin event mail failed:", err);
  });
};

// Send course application email
const sendCourseApplicationEmail = async (fullName, email, title) => {
  try {
    await transporter.sendMail({
      from: `"Bright Future Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Registering – Your Journey Begins 🚀",
      html: `
        <p>Dear <strong>${fullName}</strong>,</p>
        <p>Thank you for registering for <strong>${title}</strong>.</p>
        <p>Our team will contact you shortly.</p>
        <p><strong>Bright Future Academy Team</strong></p>
      `
    });
  } catch (err) {
    console.error("Error sending course application email:", err);
    throw err;
  }
};

// Send course admin notification
const sendCourseAdminNotification = (fullName, email, phone, title, programType) => {
  transporter.sendMail({
    from: `"Bright Future Academy" <${process.env.EMAIL_USER}>`,
    to: "vinithvinith35614@gmail.com",
    subject: "📩 New Course Registration",
    html: `
      <h3>New Course Registration</h3>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Course:</b> ${title}</p>
      <p><b>Type:</b> ${programType}</p>
      <p><b>Time:</b> ${new Date().toLocaleString()}</p>
    `
  }).catch(err => {
    console.error("Admin course mail failed:", err);
  });
};

// Send contact confirmation email
const sendContactConfirmationEmail = async (name, email, message) => {
  try {
    await transporter.sendMail({
      from: `"Bright Future Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We received your message — Bright Future Academy',
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thanks for reaching out to Bright Future Academy. We received your message:</p>
        <blockquote>${message}</blockquote>
        <p>Our team will reply shortly. If you need urgent assistance, call +91 9087315789.</p>
        <p><strong>— Bright Future Academy Team</strong></p>
      `
    });
  } catch (err) {
    console.error("Error sending contact confirmation email:", err);
    throw err;
  }
};

// Send contact admin notification
const sendContactAdminNotification = (name, email, phone, message) => {
  transporter.sendMail({
    from: `"Bright Future Academy" <${process.env.EMAIL_USER}>`,
    to: 'vinithvinith35614@gmail.com',
    subject: 'New contact message received',
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Message:</strong><br/>${message}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `
  }).catch(err => {
    console.error('Admin contact mail failed:', err && err.message ? err.message : err);
  });
};

module.exports = {
  sendEventApplicationEmail,
  sendEventAdminNotification,
  sendCourseApplicationEmail,
  sendCourseAdminNotification,
  sendContactConfirmationEmail,
  sendContactAdminNotification
};
