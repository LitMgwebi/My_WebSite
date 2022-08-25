import Header from "./components/PageEnvelope/Header";
import Intro from "./components/PageContent/Intro";
import './App.css';
import Footer from "./components/PageEnvelope/Footer";
import Tabs from "./components/PageContent/Tabs";

function App() {
  return (
    <div className="App">
      <div><Header/></div>

      <div>
          <Intro/>

          <Tabs/>
      </div>

      <div><Footer/></div>
    </div>
  );
}

export default App;
