const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');

router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi lấy tin nhắn: ' + error.message });
    }
});


// API: Gửi tin nhắn mới (POST)
// Đường dẫn: POST http://localhost:5000/api/contacts
router.post('/', async (req, res) => {
    try {
        const newMessage = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });

        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(400).json({ message: 'Lỗi gửi tin nhắn: ' + error.message });
    }
});

module.exports = router;