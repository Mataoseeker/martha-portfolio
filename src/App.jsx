import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Resume from "./Pages/Resume"
import Contact from "./Pages/Contact"
function App() {

  return (
    <>
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
