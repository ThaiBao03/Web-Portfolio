const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// 1. API: Đăng ký tài khoản admin (Chạy 1 lần để tạo tài khoản admin)
// POST http://localhost:5000/api/auth/register
router.post('/register', async (req, res) => {
    try {
        // Kiểm tra nếu username đã tồn tại chưa
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username đã tồn tại!' });
        }
        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        // Tạo người dùng mới
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(201).json({ messgae: "Đăng ký thành công!", userId: savedUser._id });
    } catch (error) {
        ré.status(500).json({ messgae: "Lỗi đăng ký: " + error.message });
    }
});

// 2. API: Đăng nhập (POST http://localhost:5000/api/auth/login)
router.post('/login',async (req, res) => {
    try {
        // Tìm user theo username
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json({ message: 'Sai tài khoản hoặc mật khẩu!' });
        }

        // so sánh mật khẩu
        const isPasswordValue = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValue) {
            return res.status(400).json({ message: 'Sai tài khoản hoặc mật khẩu!' });
        }

        // Nếu đúng cả 2, Tài khoản và Mật khẩu
        res.json({ message: 'Đăng nhập thành công!', username: user.username }); // Hoặc sử dụng:  userId: user._id
    } catch (error) {
        res.status(500).json({ message: 'Lỗi đăng nhập: ' + error.message });
    }
});

module.exports = router;