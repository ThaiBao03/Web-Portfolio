import Reacr from 'react';

const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-yellow-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo TB */}
            <div className="flex-shrink-0 cursor-pointer">
              <span className="text-3xl font-bold text-yellow-400 tracking-tighter hover:text-white transition-colors">
                TB<span className="text-white text-sm">.dev</span>
              </span>
            </div>

            {/* Menu bên phải */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Trang Chủ
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Dự Án
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Liên Hệ
                </a>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-transform active:scale-95">
                  Admin Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;