import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hàm gọi API lấy dữ liệu từ Backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Gọi đến API bạn đã viết ở bài trước
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi lấy dữ liệu:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400 uppercase tracking-widest">
          Dự Án Đã Làm
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Đang tải dữ liệu...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project._id} className="bg-neutral-900 rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition-all hover:shadow-lg hover:shadow-yellow-500/10 group">
                
                {/* Ảnh dự án */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image || "https://via.placeholder.com/400x300"} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-500"
                  />
                  {/* Lớp phủ khi hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      Xem Chi Tiết
                    </button>
                  </div>
                </div>

                {/* Nội dung */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack (Danh sách công nghệ) */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-500 rounded border border-yellow-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;