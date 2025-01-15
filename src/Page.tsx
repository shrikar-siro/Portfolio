import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import "./Styling/Page.css";
import { Route, Routes } from "react-router-dom";

function Page() {
  return (
    <>
      <div className="Page">
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Experience" element={<Experience />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Page;
