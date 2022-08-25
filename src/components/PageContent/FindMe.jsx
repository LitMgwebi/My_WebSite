import GitHub from "../../icons/Github.svg";
import LinkedIn from "../../icons/LinkedIn.svg";
import Reddit from "../../icons/Reddit.svg";
import Twitter from "../../icons/Twitter.svg";
import Instagram from "../../icons/Instagram.svg";
import TikTok from "../../icons/TikTok.svg";

const FindMe = () => {
    return(
        <div id="FindMe">
            <ul id="links">
                <li>
                    <a href="https://twitter.com/CopyLithi" target="_blank" rel="noopener noreferrer"> 
                        <img className="logo" src={Twitter} alt="TwitterLogo"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LitMgwebi" target="_blank" rel="noopener noreferrer"> 
                        <img className="logo" src={GitHub} alt="GithubLogo"/> 
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lithi-mgwebi-a976ba183/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={LinkedIn} alt="LinkedInLogo"/> 
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/_lithi_mgwebi_/" target="_blank" rel="noopener noreferrer"> 
                        <img className="logo" src={Instagram} alt="InstagramLogo"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.reddit.com/user/Lithi_" target="_blank" rel="noopener noreferrer"> 
                        <img className="logo" src={Reddit} alt="RedditLogo"/> 
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@lithimgw?lang=en" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={TikTok} alt="TikTokLogo"/> 
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FindMe;