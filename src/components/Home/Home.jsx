import {Abilities, About, Portfolio} from "../Misc/Links";
import Intro from "./Intro";

function Home() {
    return(
        <div id="Home">
            <div className="ProjectHeader">
                <h1>Welcome</h1>
            </div>
            <Intro/>

            <div className="homeLinks">
                <Portfolio/><Abilities/><About/>
            </div>
        </div>
    );
}

export default Home;