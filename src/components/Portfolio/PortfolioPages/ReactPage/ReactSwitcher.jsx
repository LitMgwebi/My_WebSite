import { useState } from "react";
import MyWebsite from "./MyWebsite";
import Index from "./Index";
import { useNavigate } from "react-router-dom";
import SocialLinks from "../../../Misc/SocialLinks";

function ReactSwitcher() {
    const [navi, setNavi] = useState("index");
    let navigate = useNavigate();

    const changeChoice = (navi) => {
        setNavi(navi)
    }
    return(
        <div>
            <div className="ProjectHeader">
                <h2>React Projects</h2>
            </div>
            <div className="Switcher">
                <div className="switcherButton">
                    <button onClick={() => {navigate("/portfolio");}}>Back</button>
                </div>
                <div className="switcherNavi">
                    {navi === "myWebsite" ? <MyWebsite navi={changeChoice}/>:   <Index navi={changeChoice}/>}
                </div>
            </div>
            <SocialLinks/>
        </div>
    );
}

export default ReactSwitcher;