const mongoose = require('mongoose');

const Certificate = new mongoose.Schema({
   certificateId: {
    type: String,
    required: true,
    unique: true
  },
  studentid:{
    type: String,
    required: true,
    unique: true
  },
  batch:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  coursetype:{
    type: String,
    required: true
  },
  startingtime: {
    type: String,
    required: true,
  },
  endingtime: {
    type: String,
    required: true,
  },
  aboutstudents: {
    type: String,
    required: true
  },
  aboutcourse:{
     type: String,
    required: true
  },
  additionalinformation:{
    type: String
  },
   qrData: {
    type: String,
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Certificatedata', Certificate);
