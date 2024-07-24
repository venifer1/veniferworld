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
import ScrollToTop from "../components/ScrollToTop";
import MobileMain from "../components/mobile/MobileMain";
import MobileProfile from "../components/mobile/MobileProfile";
import MobileAbout from "../components/mobile/MobileAbout";
import MobileSkills from "../components/mobile/MobileSkills";

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
      <ScrollToTop />
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
                <Route path="/" element={<MobileMain/>}></Route>
                <Route path="/Profile" element={<MobileProfile/>}></Route>
                <Route path="/About" element={<MobileAbout/>}></Route>
                <Route path="/Skills" element={<MobileSkills/>}></Route>
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
