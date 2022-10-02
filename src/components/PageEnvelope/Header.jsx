// import {headerHome, headerPortfolio, headerAbout, headerAbilities} from "../Misc/Links";
import { HeaderAbilities, HeaderHome, HeaderPortfolio, HeaderAbout } from "../Misc/Links";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

function Header() {
    const location = useLocation();
    let page = "home";

    page = location.state
    function inAbout(){
        return(
            <div className="headerLinks">
                <HeaderHome/> <HeaderPortfolio/> <HeaderAbilities/>
            </div>
        )
    }

    function inAbilities(){
        return(
            <div className="headerLinks">
                <HeaderHome/> <HeaderPortfolio/> <HeaderAbout/>
            </div>
        )
    }

    function inPortfolio(){
        return(
            <div className="headerLinks">
                <HeaderHome/> <HeaderAbilities/> <HeaderAbout/>
            </div>
        )
    }

    function inHome() {
        return(
            <div className="headerLinks">
                <HeaderPortfolio/> <HeaderAbilities/> <HeaderAbout/>
            </div>
        )
    }
    return (
        <header id="Header">
            <Link to="/" id="HeaderName">
                Lithi Mgwebi
            </Link>
           <div> {page === "about" ? inAbout(): page==="portfolio" ? inPortfolio() : page === "abilities"  ? inAbilities() : inHome()}</div>
        </header>
    )
}

export default Header;