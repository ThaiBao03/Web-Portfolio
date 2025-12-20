const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Kích hoạt thư viện đọc file .env

const cors = require('cors');


// Gọi file route (đường dẫn này không đổi)
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

//Cho phép đọc dự liệu JSON
app.use(express.json());
app.use(cors());

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Kết nối MongoDB thành công!');
    })
    .catch((err) => {
        console.error('Lỗi kết nối MongoDB:', err);
    });

app.get('/', (req, res) => {
    res.send('API Web Portfolio đang chạy...!');
});

// Mọi đường dẫn bắt đầu với /api sẽ được xử lý bởi projectRoutes
app.use('/api/projects', projectRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});