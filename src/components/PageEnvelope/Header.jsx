import {Home, Portfolio, About, Abilities} from "../Misc/Links";
import {useLocation} from "react-router-dom";

function Header() {
    const location = useLocation();
    let page = "home";

    page = location.state
    function inAbout(){
        return(
            <div className="headerLinks">
                <Home/> <Portfolio/> <Abilities/>
            </div>
        )
    }

    function inAbilities(){
        return(
            <div className="headerLinks">
                <Home/> <Portfolio/> <About/>
            </div>
        )
    }

    function inPortfolio(){
        return(
            <div className="headerLinks">
                <Home/> <Abilities/> <About/>
            </div>
        )
    }

    function inHome() {
        return(
            <div className="headerLinks">
                <Portfolio/> <Abilities/> <About/>
            </div>
        )
    }
    return (
        <header id="Header">
            <p>Lithi Mgwebi</p>

           <div> {page === "about" ? inAbout(): page==="portfolio" ? inPortfolio() : page === "abilities"  ? inAbilities() : inHome()}</div>
        </header>
    )
}

export default Header;