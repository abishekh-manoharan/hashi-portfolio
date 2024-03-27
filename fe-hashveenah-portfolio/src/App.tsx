import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import ProjectList from "./components/Projects/ProjectList"
import ProjectDetail from "./components/Projects/ProjectDetail"
import Login from "./components/Login"
import Contact from "./components/Contact"
import Header from "./components/Header"
import { useState } from "react"
import { register } from 'swiper/element/bundle';
import ScrollReset from "./components/NonUIComponents/ScrollToTop"
import NavHideOnScroll from "./components/NonUIComponents/NavHideOnScroll"

function App() {
  register();

  const [location, setLocation] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollReset /> {/* ensuring scroll is reset to top position on route change */}
      <NavHideOnScroll menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> {/* ensuring nav is hidden on scroll down on mobile view */}
      <Routes>
        {/* <Route path="/" element=<Home /> /> */}
        <Route element=<Header location={location} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> >
          <Route path="/" element=<About setLocation={setLocation}/> />
          <Route path="/projects" element=<ProjectList setLocation={setLocation}/> />
          <Route path="/project/:id/:index" element=<ProjectDetail /> />
          <Route path="/contact" element=<Contact setLocation={setLocation}/> />
          <Route path='/login' element=<Login setLocation={setLocation}/> />
        </Route>
      </Routes >
    </>
  )
}

export default App
