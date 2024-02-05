import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import ProjectList from "./components/Projects/ProjectList"
import Project from "./components/Projects/Project"
import Nav from "./components/Nav"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route element=<Nav/> >
          <Route path="/about" element=<About /> />
          <Route path="/projects" element=<ProjectList /> />
          <Route path="/project/:id" element=<Project /> />
          <Route path="/contact" element=<Contact /> />
        </Route>
      </Routes >
    </>
  )
}

export default App
