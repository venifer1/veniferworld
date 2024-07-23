import "../styles/App.css";
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
import styled from "styled-components";
import { Desktop, Mobile } from "../components/MediaQuery";
import MobileNav from "../components/mobile/MobileNav";
import { Fragment } from "react/jsx-runtime";

const AppView = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .Left,
  .Right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const MobileAppView = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .MobileBottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Desktop>
        <>
          <AppView>
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
                <Route path="/NotFound" element={<NotFound />}></Route>
              </Routes>
            </div>
          </AppView>
        </>
      </Desktop>
      <Mobile>
        <>
          <MobileAppView>
            <div className="MobileTop">
              <MobileNav></MobileNav>
            </div>
            <div className="MobileBottom">
              <Routes>
                <Route path="/"></Route>
                <Route path="/Profile"></Route>
                <Route path="/About"></Route>
                <Route path="/Skills"></Route>
                <Route path="/Projects"></Route>
                <Route path="/Contact"></Route>
                <Route path="/*"></Route>
                <Route path="/NotFound"></Route>
              </Routes>
            </div>
          </MobileAppView>
        </>
      </Mobile>
    </BrowserRouter>
  );
}
