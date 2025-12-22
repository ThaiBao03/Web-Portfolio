import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProjectDetail = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState('html'); // Tab đang chọn

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // Gọi API lấy chi tiết 1 dự án
        const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(res.data);
      } catch (error) {
        console.error("Lỗi lấy dữ liệu hoặc chưa có API:", error);
        // Mẹo: Nếu API lỗi, bạn có thể bỏ comment dòng dưới để test giao diện bằng dữ liệu ảo
        // setProject(sampleProject); 
      }
    };
    fetchProject();
  }, [id]);

  // --- PHẦN ĐÃ SỬA LỖI ---
  // Nếu chưa có dữ liệu (project là null), hiển thị màn hình chờ
  if (!project) {
    return (
      <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
        <p className="text-yellow-400 text-xl font-bold animate-pulse">Đang tải dữ liệu dự án... ⏳</p>
      </div>
    );
  }
  // -----------------------

  const data = project;

  return (
    <div className="bg-black min-h-screen text-white pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Nút quay lại */}
        <Link to="/" className="text-yellow-500 hover:text-yellow-400 mb-8 inline-block font-bold transition-transform hover:-translate-x-1">
          ← Quay lại trang chủ
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Cột Trái: Thông tin & Demo */}
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">{data.title}</h1>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">{data.description}</p>
            
            {/* Khung Demo */}
            <div className="bg-white rounded-lg h-80 flex items-center justify-center text-black font-bold border-4 border-neutral-800 shadow-lg shadow-yellow-500/10 overflow-hidden relative">
               {data.image ? (
                 <img src={data.image} alt="Demo" className="w-full h-full object-cover" />
               ) : (
                 <span>DEMO VIEW (Chưa có ảnh)</span>
               )}
            </div>
          </div>

          {/* Cột Phải: Source Code */}
          <div>
            {/* Tabs chọn ngôn ngữ */}
            <div className="flex space-x-2 mb-2">
              {['html', 'css', 'js'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-t-lg font-bold uppercase text-sm transition-all ${
                    activeTab === tab 
                    ? 'bg-neutral-800 text-yellow-400 border-t border-x border-yellow-500/50' 
                    : 'bg-neutral-900 text-gray-500 hover:text-gray-300 hover:bg-neutral-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Khung hiển thị code */}
            <div className="bg-neutral-800 p-6 rounded-b-lg rounded-tr-lg border border-neutral-700 min-h-[400px] overflow-auto shadow-inner relative">
              <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">
                {/* Kiểm tra an toàn: Nếu có trường 'code' thì mới hiển thị */}
                {data.code && data.code[activeTab] 
                  ? data.code[activeTab] 
                  : "// Chưa có code mẫu cho dự án này trong Database."}
              </pre>
            </div>
            
            <button 
              onClick={() => {
                 if(data.code && data.code[activeTab]) {
                    navigator.clipboard.writeText(data.code[activeTab]);
                    alert("Đã copy code!");
                 }
              }}
              className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded font-bold hover:bg-yellow-400 w-full transition-transform active:scale-95"
            >
              Copy Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;