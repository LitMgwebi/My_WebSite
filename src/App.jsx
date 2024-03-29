//#region File Imports
import Header from "./components/PageEnvelope/Header";
import Footer from "./components/PageEnvelope/Footer";
import Home from "./components/Home/Home";
import MernIndex from "./components/Portfolio/PortfolioPages/MernPage/MernIndex";
import ReactIndex from "./components/Portfolio/PortfolioPages/ReactPage/ReactIndex";
import PythonIndex from "./components/Portfolio/PortfolioPages/PythonPage/PythonIndex";
import SimpleCalculator from "./components/Portfolio/PortfolioPages/PythonPage/SimpleCalculator";
import Portfolio from "./components/Portfolio/Portfolio";
import ArtBlog from "./components/Portfolio/PortfolioPages/MernPage/ArtBlog";
import Profile from "./components/About/Profile";
import Tutor from "./components/Tutor/Tutor";
import Skills from "./components/Abilities/Skills";
import MyWebsite from "./components/Portfolio/PortfolioPages/ReactPage/MyWebsite";
//#endregion

//#region System Imports
import useLocalStorage from "use-local-storage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
//#endregion

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light'
            ? 'dark' : 'light';
        console.log(theme)
        setTheme(newTheme);
    }
    return (
        <div className="App" data-theme={theme}>
            <Router>
                <Header theme={switchTheme} imgIcon={theme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/tutor" element={<Tutor />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/portfolio/react" element={<ReactIndex />} />
                    <Route path="/portfolio/python" element={<PythonIndex />} />
                    <Route path="/portfolio/mern" element={<MernIndex />} />
                    <Route path="/portfolio/python/simpleCalculator" element={<SimpleCalculator />} />
                    <Route path="/portfolio/mern/artblog" element={<ArtBlog />} />
                    <Route path="/portfolio/react/mywebsite" element={<MyWebsite />} />
                </Routes>
            </Router>

            <Footer />
        </div>
    );
}

export default App;
