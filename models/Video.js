const crypto = require('crypto');
const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  videoID: { type: String, unique: true },
  fileURL: { type: String },
  title: String,
  duration: String,
  comments: Array,
  datePosted: { type : Date, default: Date.now },
  description: String,
  viewCount: Number,
  likeCount: Number,
  dislikeCount: Number
}, { timestamps: true });

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;