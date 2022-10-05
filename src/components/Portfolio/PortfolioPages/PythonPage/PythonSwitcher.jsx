import{useState} from "react";
import { useNavigate } from "react-router-dom";
import Index from "./Index";
import SimpleCalculator from "./SimpleCalculator";
import SocialLinks from "../../../Misc/SocialLinks";
import {Link} from "react-router-dom";
import portfolio from "../../../../icons/portfolio.svg";

function PythonSwitcher(){
    const [navi, setNavi] = useState("index");
    let navigate = useNavigate();

    const changeChoice = (navi) => {
        setNavi(navi);
    }
    return(
        <div>
            <div className="ProjectHeader">
                <h1>Python Projects</h1>
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
                    {navi === "simpleCalculator" ? <SimpleCalculator navi={changeChoice} /> : <Index navi={changeChoice}/>} 
                </div>
            </div>
            <SocialLinks/>
        </div>
    );
}

export default PythonSwitcher;