import Header from "./components/PageEnvelope/Header";
import Intro from "./components/PageContent/Intro";
import './App.css';
import Footer from "./components/PageEnvelope/Footer";
import Tabs from "./components/PageContent/Tabs";

function App() {
  return (
    <div className="App">
      <Header/>

      <div>
          <Intro/>

          <Tabs/>
      </div>

      <div className="spacer"></div>
      <Footer/>
    </div>
  );
}

export default App;
