import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import ProjectList from "./components/Projects/ProjectList"
import ProjectDetail from "./components/Projects/ProjectDetail"
import Contact from "./components/Contact"
import Header from "./components/Header"
import { useState } from "react"
import { register } from 'swiper/element/bundle';

function App() {
  register();

  const [location, setLocation] = useState('home');

  return (
    <>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route element=<Header location={location}/> >
          <Route path="/about" element=<About setLocation={setLocation}/> />
          <Route path="/projects" element=<ProjectList setLocation={setLocation}/> />
          <Route path="/project/:id/:index" element=<ProjectDetail /> />
          <Route path="/contact" element=<Contact setLocation={setLocation}/> />
        </Route>
      </Routes >
    </>
  )
}

export default App
