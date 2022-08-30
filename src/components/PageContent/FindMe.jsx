import GitHub from "../../icons/Github.svg";
import LinkedIn from "../../icons/LinkedIn.svg";
import Reddit from "../../icons/Reddit.svg";
import Twitter from "../../icons/Twitter.svg";
import Instagram from "../../icons/Instagram.svg";
import Link from "../../icons/Link.svg";
import TikTok from "../../icons/TikTok.svg";
import {useState} from "react";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";


const FindMe = () => {
    const [open, setOpen] = useState(true);


    const handleClick = () => {
        setOpen(!open);
    }
    return(
        <div id="FindMe">
            <img className="logo" onClick={handleClick} src={Link} alt="Link"/>
            {open ? <ExpandLess/> : <ExpandMore/>}
            <Collapse sx={{hidden: true}} in={open} timeout="auto" unmountOnExit>
                <a href="https://twitter.com/CopyLithi" target="_blank" rel="noopener noreferrer"> 
                    <img className="logo" src={Twitter} alt="TwitterLogo"/>
                </a>
                <a href="https://github.com/LitMgwebi" target="_blank" rel="noopener noreferrer"> 
                    <img className="logo" src={GitHub} alt="GithubLogo"/> 
                </a>
                <a href="https://www.linkedin.com/in/lithi-mgwebi-a976ba183/" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src={LinkedIn} alt="LinkedInLogo"/> 
                </a>
                <a href="https://www.instagram.com/_lithi_mgwebi_/" target="_blank" rel="noopener noreferrer"> 
                    <img className="logo" src={Instagram} alt="InstagramLogo"/>
                </a>
                <a href="https://www.reddit.com/user/Lithi_" target="_blank" rel="noopener noreferrer"> 
                    <img className="logo" src={Reddit} alt="RedditLogo"/> 
                </a>
                <a href="https://www.tiktok.com/@lithimgw?lang=en" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src={TikTok} alt="TikTokLogo"/> 
                </a>
            </Collapse>
        </div>
    );
}

export default FindMe;