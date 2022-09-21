import Header from "./components/PageEnvelope/Header";
import Footer from "./components/PageEnvelope/Footer";
import Intro from "./components/PageContent/Intro";
import MernSwitcher from "./components/PageContent/Chronicle/PortfolioPages/MernPage/MernSwitcher";
import ReactSwitcher from "./components/PageContent/Chronicle/PortfolioPages/ReactPage/ReactSwitcher";
import PythonSwitcher from "./components/PageContent/Chronicle/PortfolioPages/PythonPage/PythonSwitcher";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ChronicleTabs from "./components/PageContent/ChronicleTabs";
import AbilitiesTabs from "./components/PageContent/AbilitiesTabs";

function App() {
  return (
    <div className="App">
      <Header/>

      <div>
          <Intro/>

          <Router>
            <div>
              <Routes>
                <Route path="/" element={<ChronicleTabs/>}/>
                <Route path="/reactprojects" element={<ReactSwitcher/>}/>
                <Route path="/pythonprojects" element={<PythonSwitcher/>}/>
                <Route path="/mernprojects" element={<MernSwitcher/>}/>
              </Routes>
            </div>
          </Router>

          <AbilitiesTabs/>
      </div>

      <div className="spacer"></div>
      <Footer/>
    </div>
  );
}

export default App;
