import { useState } from "react";
import Education from "./Education";
import Biography from "./Biography";

function ProfileTabs() {
    const [activeTab, setActiveTab] = useState("profile");
    const handleTab1 = () => {
        setActiveTab("profile");
    };
    const handleTab2 = () => {
        setActiveTab("education");
    };
    return (
        <>
            <ul className="nav">
                <li
                    className={activeTab === "profile" ? "active" : ""}
                    onClick={handleTab1}
                >
                    Biography
                </li>
                <li
                    className={activeTab === "education" ? "active" : ""}
                    onClick={handleTab2}
                >
                    Education
                </li>
            </ul>

            <div className="outlet">
                {activeTab === "profile" ? <Biography /> : <Education />}
            </div>
        </>
    );
}

export default ProfileTabs;