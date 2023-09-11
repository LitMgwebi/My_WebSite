import { useState } from "react";
import ReactIndex from "./PortfolioPages/ReactPage/ReactIndex";
import PythonIndex from "./PortfolioPages/PythonPage/PythonIndex";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("react");
    const handleTab1 = () => {
        setActiveTab("react");
    };
    const handleTab2 = () => {
        setActiveTab("python");
    };
    return (
        <div id="Portfolio">
            <h1>Portfolio</h1>
            <section>
                <div className='portfolioNav'>
                    <ul>
                        <li
                            className={activeTab === "react" ? "active" : ""}
                            onClick={handleTab1}
                        >
                            React
                        </li>
                        <li
                            className={activeTab === "python" ? "active" : ""}
                            onClick={handleTab2}
                        >
                            Python
                        </li>
                    </ul>
                </div>
                <div className='portfolioOutlet'>
                    {activeTab === "react" ? <ReactIndex /> : <PythonIndex />}
                </div>
            </section>
        </div>
    )
}

export default Portfolio;