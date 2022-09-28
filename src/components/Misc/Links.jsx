import github from "../../icons/Github.svg";
import linkedin from "../../icons/LinkedIn.svg";
import reddit from "../../icons/Reddit.svg";
import twitter from "../../icons/Twitter.svg";
import instagram from "../../icons/Instagram.svg";
import tiktok from "../../icons/Tiktok.svg";
import dev from "../../icons/DEV.svg";
import about from "../../icons/About.svg";
import abilities from "../../icons/Abilities.svg";
import portfolio from "../../icons/Portfolio.svg";
import home from "../../icons/Home.svg";
import {Link} from "react-router-dom";

//#region Social Links
function Github() {
    return(
        <div className="socialLink">
            <a href="https://github.com/LitMgwebi" target="_blank" rel="noopener noreferrer"> 
                <img className="logo" src={github} alt="GithubLogo"/> 
            </a>
        </div>
    );
}

function LinkedIn() {
    return(
        <div className="socialLink">
            <a href="https://www.linkedin.com/in/lithi-mgwebi-a976ba183/" className="socialLink" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={linkedin} alt="LinkedInLogo"/> 
            </a>
        </div>
    );
}

function Twitter() {
    return(
        <div className="socialLink">
            <a href="https://twitter.com/CopyNinjaLithi" target="_blank" rel="noopener noreferrer"> 
                <img className="logo" src={twitter} alt="TwitterLogo"/>
            </a>
        </div>
    );
}

function Instagram() {
    return(
        <div className="socialLink">
            <a href="https://www.instagram.com/copyninjalithi/" target="_blank" rel="noopener noreferrer"> 
                <img className="logo" src={instagram} alt="InstagramLogo"/>
            </a>
        </div>
    )
}
                    
function Reddit() {
    return(
        <div className="socialLink">
            <a href="https://www.reddit.com/user/Lithi_" target="_blank" rel="noopener noreferrer"> 
                <img className="logo" src={reddit} alt="RedditLogo"/> 
            </a>
        </div>
    )
}

function Tiktok() {
    return(
        <div className="socialLink">
            <a href="https://www.tiktok.com/@lithimgw?lang=en" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={tiktok} alt="TikTokLogo"/> 
            </a>
        </div>
    )
}

function Dev() {
    return(
        <div className="socialLink">
            <a href="https://dev.to/lit_mgwebi" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={dev} alt="DEVLogo" />
            </a>
        </div>
    )
}
//#endregion

//#region Site Links
function Home(){
    return(
        <div className="siteLink">
            <Link 
                to="/"
                state="home"
            >
                <img className="siteLogo" src={home} alt="Home" />
                <h6>Home</h6>
            </Link>
        </div>
    );
}

function About(){
    return(
        <div className="siteLink">
            <Link 
                to="/about"
                state={"about"}    
            >
                <img className="siteLogo" src={about} alt="About" />
                <h6>About</h6>
            </Link>
        </div>
    );
}

function Abilities(){
    return(
        <div className="siteLink">
            <Link 
                to="/abilities"
                state={"abilities"}
            >
                <img className="siteLogo" src={abilities} alt="Abilities" />
                <h6>Abilities</h6>
            </Link>
        </div>
    );
}

function Portfolio(){
    return(
        <div className="siteLink">
            <Link 
                to="/portfolio"
                state={"portfolio"}
            >
                <img className="siteLogo" src={portfolio} alt="Portfolio" />
                <h6>Portfolio</h6>
            </Link>
        </div>
    );
}

//#endregion

export {Github, LinkedIn, Twitter, Instagram, Reddit, Tiktok, Dev, Home, Abilities, About, Portfolio}