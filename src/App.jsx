import Header from "./components/PageEnvelope/Header";
import Intro from "./components/PageContent/Intro";
import PythonSwitcher from "./components/PastProjects/PythonPage/PythonSwitcher";
import ReactSwitcher from "./components/PastProjects/ReactPage/ReactSwitcher";
import MernSwitcher from "./components/PastProjects/MernPage/MernSwitcher";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from "./components/PageEnvelope/Footer";
import Tabs from "./components/PageContent/Tabs";

function App() {
  return (
    <div className="App">
      <Header/>

      <div>
          <Intro/>
          <Router>
            <div>
              <Routes>
                <Route path="/" element={<Tabs/>}/>
                <Route path="/reactprojects" element={<ReactSwitcher/>}/>
                <Route path="/pythonprojects" element={<PythonSwitcher/>}/>
                <Route path="/mernprojects" element={<MernSwitcher/>}/>
              </Routes>
            </div>
          </Router>
      </div>

      <div className="spacer"></div>
      <Footer/>
    </div>
  );
}

export default App;
