import {Link} from "react-router-dom";

function HomeButton(){
    return(
        <div id="HomeButton">
            <Link to="/">
                    <button className="PPButton">Home</button>
            </Link>
        </div>
    );
}

export default HomeButton;