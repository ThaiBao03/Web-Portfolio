import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectDetail from './components/ProjectDetail'; // Import trang mới

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Contact />
  </>
);

function App() {

  return (
    <Router>
      <div className="bg-neutral-900 min-h-screen text-white">
        <Navbar /> {/* Navbar luôn hiện ở mọi trang */}
        
        <Routes>
          {/* Đường dẫn trang chủ */}
          <Route path="/" element={<Home />} />
          
          {/* Đường dẫn trang chi tiết (kèm ID) */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        <Footer /> {/* Footer luôn hiện ở mọi trang */}
      </div>
    </Router>
  )
}

export default App
