import "../styles/App.css";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function App() {
  return (
    <div className="AppView">
      <div className="Left">
        <Logo></Logo>
        <Nav></Nav>
      </div>
      <div className="Right">
        <Main></Main>
        <Profile></Profile>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
