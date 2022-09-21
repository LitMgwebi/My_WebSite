import Certifications from "./Abilities/Certifications";
import Skills from "./Abilities/Skills";
import {useState} from "react";

function AbilitiesTabs() {
    const [active, setActive] = useState("Skills");

    return(
        <div id="Tabs">
            <ul className="nav">
                <li
                    className={active === "Skills" ? "active": ""}
                    onClick={() => { setActive("Skills")}}
                >
                    Skills
                </li>
                <li
                    className={active === "Certifications" ? "active": ""}
                    onClick={() => { setActive("Certifications")}}
                >
                    Certifications
                </li>
            </ul>
            <div className="outlet">
                {active === "Skills" ? <Skills/>: <Certifications/>}
            </div>
        </div>
    );
}

export default AbilitiesTabs;