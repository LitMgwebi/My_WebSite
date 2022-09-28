//#region File Imports
import Header from "./components/PageEnvelope/Header";
import Footer from "./components/PageEnvelope/Footer";
import Home from "./components/Home/Home";
import MernSwitcher from "./components/Portfolio/PortfolioPages/MernPage/MernSwitcher";
import ReactSwitcher from "./components/Portfolio/PortfolioPages/ReactPage/ReactSwitcher";
import PythonSwitcher from "./components/Portfolio/PortfolioPages/PythonPage/PythonSwitcher";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/AboutMe";
import Abilities from "./components/Abilities/Abilities";
import './App.css';
//#endregion

//#region System Imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//#endregion

function App() {
  return (
    <div className="App">
      <Router>
        <div id="Content">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/abilities" element={<Abilities/>}/>
            <Route path="/portfolio/react" element={<ReactSwitcher/>}/>
            <Route path="/portfolio/python" element={<PythonSwitcher/>}/>
            <Route path="/portfolio/mern" element={<MernSwitcher/>}/>
          </Routes>
        </div>
        <div id="spacer"></div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
