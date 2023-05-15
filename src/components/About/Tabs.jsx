import { useState } from "react";
import Education from "./Education";
import Profile from "./Profile";

function Tabs() {
    const [activeTab, setActiveTab] = useState("profile");
    const handleTab1 = () => {
        setActiveTab("profile");
    };
    const handleTab2 = () => {
        setActiveTab("education");
    };
    return (
        <div id="ContentContainer">
            <ul className="nav">
                <li
                    className={activeTab === "profile" ? "active" : ""}
                    onClick={handleTab1}
                >
                    Profile
                </li>
                <li
                    className={activeTab === "education" ? "active" : ""}
                    onClick={handleTab2}
                >
                    Education
                </li>
            </ul>

            <div className="outlet">
                {activeTab === "profile" ? <Profile /> : <Education />}
            </div>
        </div>
    );
}

export default Tabs;