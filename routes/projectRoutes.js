const express = require('express');
const router = express.Router();
// Đảm bảo import đúng tên file (viết thường)
const Project = require('../models/project'); 

// 1. API: Lấy tất cả dự án (GET)
router.get('/', async (req, res) => {
    try {
        
        const projects = await Project.find().sort({ createdAt: -1 });
        
        // Trả về biến projects
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi lấy dự án: ' + error.message });
    }
});

// 2. API: Tạo dự án mới (POST)
router.post('/', async (req, res) => {
    // SỬA: Chỗ này phải là 'new Project' (Không có chữ s)
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        code: req.body.code,
        techStack: req.body.techStack // SỬA: Đã sửa chính tả teckStack thành techStack
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: 'Lỗi tạo dự án: ' + error.message });
    }
});

module.exports = router;