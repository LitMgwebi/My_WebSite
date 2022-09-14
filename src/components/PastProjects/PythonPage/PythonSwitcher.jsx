import{useState} from "react";
import HomeButton from "../components/HomeButton";
import Index from "./Index";
import SimpleCalculator from "./SimpleCalculator";

function PythonSwitcher(){
    const [navi, setNavi] = useState("index");

    const changeChoice = (navi) => {
        setNavi(navi);
    }

    return(
        <div>
            <div className="ProjectHeader">
                <h2>Python Projects</h2>
            </div>
             <div className="Switcher">
                <HomeButton/>
                <div className="Navi">
                    {navi === "simpleCalculator" ? <SimpleCalculator navi={changeChoice} /> : <Index navi={changeChoice}/>} 
                </div>
            </div>
        </div>
    );
}

export default PythonSwitcher;