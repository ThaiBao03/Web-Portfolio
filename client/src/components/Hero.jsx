import React from 'react';
import heroImage from '../assets/imgs/Anh-1.png';

const Hero = () => {
    return (
        <div className="bg-neutral-900 text-white min-h-screen flex items-center justify-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            
                {/* Bên trái: Chữ giới thiệu */}
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <h2 className="text-yellow-400 font-bold text-xl mb-4 tracking-widest uppercase">
                        Hello, I am
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Developer <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ">
                        Animation
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                        Chào mừng đến với không gian sáng tạo của tôi. Nơi lưu trữ những dự án web và hiệu ứng chuyển động độc đáo.
                    </p>
                    
                    <div className="flex space-x-4 justify-center md:justify-start">
                        <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                        Xem Dự Án
                        </button>
                        <button className="border border-yellow-500 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-500/10 transition-all">
                        Liên Hệ
                        </button>
                    </div>
                </div>

                {/* Bên phải: Ảnh đại diện (Tạm thời dùng khối màu) */}
                <div className="md:w-1/2 flex justify-center relative">
                    {/* Vòng tròn trang trí phát sáng phía sau */}
                    <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>
                    
                    <img
                        src={heroImage} // Gọi biến ảnh đã import ở trên
                        alt="Hero Avatar"
                        className="relative w-80 h-80 object-cover rounded-2xl border-2 border-yellow-500/50 transform rotate-5 hover:rotate-0 duration-500 shadow-xl z-10"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;