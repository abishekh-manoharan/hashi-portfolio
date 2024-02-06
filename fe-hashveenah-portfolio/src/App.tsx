import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import ProjectList from "./components/Projects/ProjectList"
import Project from "./components/Projects/Project"
import Contact from "./components/Contact"
import Header from "./components/Header"
import { useState } from "react"

function App() {
  const [location, setLocation] = useState('home');

  return (
    <>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route element=<Header location={location}/> >
          <Route path="/about" element=<About setLocation={setLocation}/> />
          <Route path="/projects" element=<ProjectList setLocation={setLocation}/> />
          <Route path="/project/:id" element=<Project setLocation={setLocation}/> />
          <Route path="/contact" element=<Contact setLocation={setLocation}/> />
        </Route>
      </Routes >
    </>
  )
}

export default App
