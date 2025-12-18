const mongoose = require('mongoose');

// Định nghĩa khuôn mẫu cho một Dự án
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Bắt buộc phải có tên
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Lưu đường dẫn ảnh (URL)
    required: true,
  },
  // Đây là phần quan trọng cho Portfolio Animation của bạn
  code: {
    html: { type: String, default: '' },
    css:  { type: String, default: '' },
    js:   { type: String, default: '' },
  },
  techStack: {
    type: [String], // Mảng các công nghệ, ví dụ: ['React', 'Tailwind']
    default: [],
  },
  liveUrl: {
    type: String, // Link demo chạy thử
  },
  createdAt: {
    type: Date,
    default: Date.now, // Tự động lưu thời gian tạo
  }
});

module.exports = mongoose.model('project', projectSchema);