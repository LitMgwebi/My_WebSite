import AboutMe from "../TabData/AboutMe";
import PastProjects from "../TabData/PastProjects";
import {useState} from "react";

function Tabs() {
    const [active, setActive] = useState("PastProjects");

    return (
        <div id="Tabs">

            <ul className="nav">
                <li 
                    className={active === "PastProjects" ? "active" : ""}
                    onClick={() => setActive("PastProjects")}
                >
                    Past Projects
                </li>
                <li 
                    className={active === "AboutMe" ? "active" : ""} 
                    onClick={() => setActive("AboutMe")}
                >
                    About Me
                </li>
                
            </ul>
            <div className="outlet">
                {active === "PastProjects" ? <PastProjects/> : <AboutMe/>}
            </div>
        </div>
    );
}

export default Tabs;