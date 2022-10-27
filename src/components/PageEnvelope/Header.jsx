// import {headerHome, headerPortfolio, headerAbout, headerAbilities} from "../Misc/Links";
import { HeaderAbilities, HeaderPortfolio, HeaderAbout, HeaderHome } from "../Misc/Links";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import sun from "../../icons/sun.svg"
import moon from "../../icons/moon.svg"

function Header({theme, imgIcon}) {
    const location = useLocation();
    let page = "home";

    page = location.state
    function inAbout(){
        return(
            <div className="socialLinks">
                <HeaderPortfolio/> <HeaderAbilities/>
            </div>
        )
    }

    function inAbilities(){
        return(
            <div className="socialLinks">
                <HeaderPortfolio/> <HeaderAbout/>
            </div>
        )
    }

    function inPortfolio(){
        return(
            <div className="socialLinks">
                <HeaderAbilities/> <HeaderAbout/>
            </div>
        )
    }

    function inHome() {
        return(
            <div>
                {/* <SocialLinks/> */}
            </div>
        )
    }
    function inProgram(){
        return(
            <div className="socialLinks">
                <HeaderHome/> <HeaderAbilities/> <HeaderAbout/>
            </div>
        )
    }
    return (
        <header id="Header" className="test">
            <div className="headerName">
                <Link to="/">
                    Lithi Mgwebi
                </Link>
            </div>
            <div className="headerLinks"> 
                {page === "about" ? inAbout()
                    : page==="portfolio" ? inPortfolio() 
                    : page === "abilities"  ? inAbilities() 
                    : page === "program" ? inProgram()
                    :inHome()
                }
            </div>

          <div className="headerButton">
                {imgIcon === "dark" ? <img src={sun} onClick={theme} className="headerLogo" alt="theme"/> 
                    : <img src={moon} onClick={theme} className="headerLogo" alt="theme"/>}
          </div>
        </header>
    )
}

export default Header;