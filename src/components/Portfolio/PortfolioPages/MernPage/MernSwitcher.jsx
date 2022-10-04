import { useState } from "react";
import Index from "./Index";
import { useNavigate } from "react-router-dom";
import ArtBlog from "./ArtBlog";
import SocialLinks from "../../../Misc/SocialLinks";

function MernSwitcher() {
    const [navi, setNavi] = useState("index");
    let navigate = useNavigate();

    const changeChoice = (navi) => {
        setNavi(navi);
    }

    return(
        <div>
            <div className="ProjectHeader">
                <h1>M.E.R.N Projects</h1>
            </div>
            <div className="Switcher">
                <div className="switcherButton">
                    <button onClick={() => {navigate("/portfolio");}}>Back</button>
                </div>
                <div className="switcherNavi">
                    {navi === "artBlog" ? <ArtBlog navi={changeChoice}/>:   <Index navi={changeChoice}/>}
                </div>
            </div>  
            <SocialLinks/>  
        </div>
    );
}

export default MernSwitcher;