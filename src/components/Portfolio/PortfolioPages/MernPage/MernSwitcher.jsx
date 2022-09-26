import { useState } from "react";
import Index from "./Index";
import{Home} from "../../../Misc/Links";
import ArtBlog from "./ArtBlog";

function MernSwitcher() {
    const [navi, setNavi] = useState("index");

    const changeChoice = (navi) => {
        setNavi(navi);
    }

    return(
        <div>
            <div className="ProjectHeader">
                <h2>M.E.R.N Projects</h2>
            </div>
            <div className="Switcher">
                <Home/>
                <div className="Navi">
                    {navi === "artBlog" ? <ArtBlog navi={changeChoice}/>:   <Index navi={changeChoice}/>}
                </div>
            </div>    
        </div>
    );
}

export default MernSwitcher;