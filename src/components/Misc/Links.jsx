import github from "../../icons/github.svg";
import linkedin from "../../icons/linkedin.svg";
import reddit from "../../icons/reddit.svg";
import twitter from "../../icons/twitter.svg";
import instagram from "../../icons/instagram.svg";
import tiktok from "../../icons/tiktok.svg";
import dev from "../../icons/dev.svg";
import about from "../../icons/about.svg";
import abilities from "../../icons/abilities.svg";
import portfolio from "../../icons/portfolio.svg";
import home from "../../icons/home.svg";
import tutor from "../../icons/tutor.svg"
import { Link } from "react-router-dom";

//#region Social Links
export function Github() {
    return (
        <div className="socialLink">
            <a href="https://github.com/LitMgwebi" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={github} alt="GithubLogo" />
            </a>
        </div>
    );
}

export function LinkedIn() {
    return (
        <div className="socialLink">
            <a href="https://www.linkedin.com/in/lithi-mgwebi-a976ba183/" className="socialLink" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={linkedin} alt="LinkedInLogo" />
            </a>
        </div>
    );
}

export function Twitter() {
    return (
        <div className="socialLink">
            <a href="https://twitter.com/CopyNinjaLithi" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={twitter} alt="TwitterLogo" />
            </a>
        </div>
    );
}

export function Instagram() {
    return (
        <div className="socialLink">
            <a href="https://www.instagram.com/copyninjalithi/" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={instagram} alt="InstagramLogo" />
            </a>
        </div>
    )
}

export function Reddit() {
    return (
        <div className="socialLink">
            <a href="https://www.reddit.com/user/Lithi_" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={reddit} alt="RedditLogo" />
            </a>
        </div>
    )
}

export function Tiktok() {
    return (
        <div className="socialLink">
            <a href="https://www.tiktok.com/@lithimgw?lang=en" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={tiktok} alt="TikTokLogo" />
            </a>
        </div>
    )
}

export function Dev() {
    return (
        <div className="socialLink">
            <a href="https://dev.to/lit_mgwebi" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={dev} alt="DEVLogo" />
            </a>
        </div>
    )
}
//#endregion

//#region Site Links
export function Home() {
    return (
        <div className="siteLink">
            <Link
                to="/"
                state="home"
            >
                <img className="siteLogo" src={home} alt="Home" />
                <div className="siteLinkHeader">
                    <p>Home</p>
                </div>
            </Link>
        </div>
    );
}

export function About() {
    return (
        <div className="siteLink">
            <Link
                to="/about"
                state={"about"}
            >
                <img className="siteLogo" src={about} alt="About" />
                <div className="siteLinkHeader">
                    <p>About Me</p>
                </div>
            </Link>
        </div>
    );
}

export function Tutor() {
    return (
        <div className="siteLink">
            <Link
                to="/tutor"
                state={"tutor"}
            >
                <img className="siteLogo" src={tutor} alt="Tutor" />
                <div className="siteLinkHeader">
                    <p>Tutor</p>
                </div>
            </Link>
        </div>
    );
}

export function Abilities() {
    return (
        <div className="siteLink">
            <Link
                to="/abilities"
                state={"abilities"}
            >
                <img className="siteLogo" src={abilities} alt="Abilities" />
                <div className="siteLinkHeader">
                    <p>Abilities</p>
                </div>
            </Link>
        </div>
    );
}

export function Portfolio() {
    return (
        <div className="siteLink">
            <Link
                to="/portfolio"
                state={"portfolio"}
            >
                <img className="siteLogo" src={portfolio} alt="Portfolio" />
                <div className="siteLinkHeader">
                    <p>Portfolio</p>
                </div>
            </Link>
        </div>
    );
}

//#endregion

//#region Header Links
export function HeaderHome() {
    return (
        <div className="headerLink">
            <Link
                to="/"
                state="home"
            >
                <img className="headerLogo" src={home} alt="Home" />
            </Link>
        </div>
    );
}

export function HeaderAbout() {
    return (
        <div className="headerLink">
            <Link
                to="/about"
                state={"about"}
            >
                <img className="headerLogo" src={about} alt="About" />
            </Link>
        </div>
    );
}

export function HeaderAbilities() {
    return (
        <div className="headerLink">
            <Link
                to="/abilities"
                state={"abilities"}
            >
                <img className="headerLogo" src={abilities} alt="Abilities" />
            </Link>
        </div>
    );
}

export function HeaderPortfolio() {
    return (
        <div className="headerLink">
            <Link
                to="/portfolio"
                state={"portfolio"}
            >
                <img className="headerLogo" src={portfolio} alt="Portfolio" />
            </Link>
        </div>
    );
}

export function HeaderTutor() {
    return (
        <div className="headerLink">
            <Link
                to="/tutor"
                state={"tutor"}
            >
                <img className="headerLogo" src={tutor} alt="Tutor" />
            </Link>
        </div>
    );
}
//#endregion