import { useState } from "react";
import Certifications from "./Certifications";
import Skills from "./Skills";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("certifications");
    const handleTab1 = () => {
        setActiveTab("certifications");
    };
    const handleTab2 = () => {
        setActiveTab("skills");
    };
    return (
        <div className="Tabs">
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
                    Skills
                </li>
            </ul>

            <div className="outlet">
                {activeTab === "certifications" ? <Certifications /> : <Skills />}
            </div>
        </div>
    );
};
export default Tabs;
