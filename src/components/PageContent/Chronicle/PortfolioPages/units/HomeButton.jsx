import {Link} from "react-router-dom";
import Home from "../../../../../icons/Home.svg"

function HomeButton(){
    return(
        <div id="HomeButton">
            <Link to="/">
                <img className="homeLogo" src={Home} alt="Home" />
            </Link>
        </div>
    );
}

export default HomeButton;