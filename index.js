const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Kích hoạt thư viện đọc file .env

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Kết nối MongoDB thành công!');
    })
    .catch((err) => {
        console.error('Lỗi kết nối MongoDB:', err);
    });

app.get('/', (req, res) => {
    res.send('Hello World!, Web Portfolio đang chạy!');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
