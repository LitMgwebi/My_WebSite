import {Abilities, About, Portfolio} from "../Misc/Links";
import SocialLinks from "../Misc/SocialLinks";
import Intro from "./Intro";

function Home() {
    return(
        <div id="Home">
            <Intro/>

            <div className="siteLinks">
                <Abilities/> <About/> <Portfolio/>
            </div>
            
            <SocialLinks/>
        </div>
    );
}

export default Home;