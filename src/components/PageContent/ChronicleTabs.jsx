import AboutMe from "./Chronicle/AboutMe";
import Portfolio from "./Chronicle/Portfolio";
import {useState} from "react";

function ChronicleTabs() {
    const [active, setActive] = useState("Portfolio");

    return (
        <div id="Tabs">

            <ul className="nav">
                <li 
                    className={active === "Portfolio" ? "active" : ""}
                    onClick={() => setActive("Portfolio")}
                >
                    Portfolio
                </li>
                <li 
                    className={active === "AboutMe" ? "active" : ""} 
                    onClick={() => setActive("AboutMe")}
                >
                    About Me
                </li>
                
            </ul>
            <div className="outlet">
                {active === "Portfolio" ? <Portfolio/> : <AboutMe/>}
            </div>
        </div>
    );
}

export default ChronicleTabs;