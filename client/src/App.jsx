import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'

function App() {

  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <Navbar />

      <Hero />

      <Projects />
    </div>




    // <div class="bg-[url(./imgs/Anh-1.png)] bg-cover bg-fixed bg-center w-full h-screen flex justify-center items-center">
    //     <h1 class="text-[120px] font-extrabold text-transparent bg-clip-text bg-[url(./imgs/Anh-2.png)] bg-fixed bg-cover bg-center">HELLO TAILWIND</h1>
    //     <div class="h-100vh"></div>
    // </div>
  )
}

export default App
