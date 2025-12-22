import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState(''); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Đang gữi...');

    try {
      await axios.post('http://localhost:5000/api/contacts', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-neutral-900 text-white py-20 border-t border-neutral-800" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 uppercase tracking-widest mb-4">
            Liên Hệ
          </h2>
          <p className="text-gray-400">
            Bạn có ý tưởng thú vị? Hãy nhắn tin cho tôi nhé!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-black p-8 rounded-2xl border border-yellow-500/20 shadow-lg shadow-yellow-500/5">
          {/* Tên */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Họ và Tên</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
              placeholder="Nhập tên của bạn..."
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
              placeholder="email@example.com"
            />
          </div>

          {/* Tin nhắn */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Lời nhắn</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
              placeholder="Nội dung tin nhắn..."
            ></textarea>
          </div>

          {/* Nút gửi */}
          <button 
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Đang gửi...' : 'Gửi Tin Nhắn 🚀'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center mt-4">✅ Đã gửi tin nhắn thành công!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center mt-4">❌ Có lỗi xảy ra, vui lòng thử lại.</p>
          )}
        </form>

      </div>
    </div>
  );
};

export default Contact;