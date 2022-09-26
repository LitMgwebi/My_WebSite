import { useState } from "react";
import MyWebsite from "./MyWebsite";
import Index from "./Index";
import {Home} from "../../../Misc/Links";

function ReactSwitcher() {
    const [navi, setNavi] = useState("index");
    
    const changeChoice = (navi) => {
        setNavi(navi)
    }
    return(
        <div>
            <div className="ProjectHeader">
                <h2>React Projects</h2>
            </div>
            <div className="Switcher">
                <Home/>
                <div className="Navi">
                    {navi === "myWebsite" ? <MyWebsite navi={changeChoice}/>:   <Index navi={changeChoice}/>}
                </div>
            </div>
        </div>
    );
}

export default ReactSwitcher;