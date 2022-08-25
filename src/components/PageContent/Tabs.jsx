import AboutMe from "../TabData/AboutMe";
import Certifications from "../TabData/Certifications";
import {useState} from "react";

function Tabs() {
    const [active, setActive] = useState("AboutMe");

    return (
        <div id="Tabs">

            <ul className="nav">
                <li 
                    className={active === "AboutMe" ? "active" : ""} 
                    onClick={() => setActive("AboutMe")}
                >
                    About Me...
                </li>
                <li 
                    className={active === "Certifications" ? "active" : ""}
                    onClick={() => setActive("Certifications")}
                >
                    Certifications
                </li>
            </ul>
            <div className="outlet">
                {active === "AboutMe" ? <AboutMe/> : <Certifications/>}
            </div>
        </div>
    );
}

export default Tabs;