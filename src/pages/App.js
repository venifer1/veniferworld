import "../styles/App.css";
import Header from "../components/Header";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Profile></Profile>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
