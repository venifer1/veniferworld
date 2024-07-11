import "../styles/App.css";
import "../styles/Main.css";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="AppView">
      <BrowserRouter>
        <div className="Left">
          <Logo></Logo>
          <Nav></Nav>
        </div>
        <div className="Right">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/About/:num" element={<About />}></Route>
            <Route path="/Skills/:num" element={<Skills />}></Route>
            <Route path="/Projects/:num" element={<Projects />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
            <Route path="/NotFound" element={<NotFound/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
