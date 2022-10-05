import { useState } from "react";
import Index from "./Index";
import { useNavigate } from "react-router-dom";
import ArtBlog from "./ArtBlog";
import SocialLinks from "../../../Misc/SocialLinks";
import portfolio from "../../../../icons/portfolio.svg";
import {Link} from "react-router-dom";


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
                    <Link
                        to="/portfolio"
                        state={"portfolio"}
                    >
                        <img className="portfolioLogo" src={portfolio} alt="Portfolio" />
                    </Link>
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