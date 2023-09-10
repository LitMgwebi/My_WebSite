import { useState } from "react";
import Certifications from "./Certifications";
import Proficieny from "./Proficieny";

const SkillsTabs = () => {
    const [activeTab, setActiveTab] = useState("certifications");
    const handleTab1 = () => {
        setActiveTab("certifications");
    };
    const handleTab2 = () => {
        setActiveTab("skills");
    };
    return (
        <div id="ContentContainer">
            <ul className="nav">
                <li
                    className={activeTab === "certifications" ? "active" : ""}
                    onClick={handleTab1}
                >
                    Certifications
                </li>
                <li
                    className={activeTab === "skills" ? "active" : ""}
                    onClick={handleTab2}
                >
                    Proficiency
                </li>
            </ul>

            <div className="outlet">
                {activeTab === "certifications" ? <Certifications /> : <Proficieny />}
            </div>
        </div>
    );
};
export default SkillsTabs;
