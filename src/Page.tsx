import About from "./Components/About";
//import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Navbar from "./Components/Navbar";
//import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./Styling/Page.css";
import { Routes } from "react-router-dom";

function Page() {
  return (
    <>
      <div className="Page">
        <Navbar />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Routes>
          {/* <Route path="/About" element={<About />}></Route>
          <Route path="/Experience" element={<Experience />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Contact" element={<Contact />}></Route> */}
        </Routes>
      </div>
    </>
  );
}

export default Page;
