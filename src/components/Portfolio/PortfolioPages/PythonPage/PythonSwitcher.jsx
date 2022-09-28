import{useState} from "react";
import { useNavigate } from "react-router-dom";
import Index from "./Index";
import SimpleCalculator from "./SimpleCalculator";
import SocialLinks from "../../../Misc/SocialLinks";

function PythonSwitcher(){
    const [navi, setNavi] = useState("index");
    let navigate = useNavigate();

    const changeChoice = (navi) => {
        setNavi(navi);
    }
    return(
        <div>
            <div className="ProjectHeader">
                <h2>Python Projects</h2>
            </div>
            <div className="Switcher">
                <div className="switcherButton">
                    <button onClick={() => {navigate("/portfolio");}}>Back</button>
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