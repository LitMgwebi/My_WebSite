import Skills from "./Skills";
import Certifications from "./Certifications";
import SocialLinks from "../Misc/SocialLinks";

const Abilities = () => {
    return(
        <div id="Abilities">
            <div className="ProjectHeader">
                <h1>Abilities</h1>
            </div>

            <div className="ProjectHeader">
                <h3>Skills</h3>
            </div>
            <Skills/>

            <div className="ProjectHeader">
                <h3>Certifications</h3>
            </div>
            <Certifications/>

            <SocialLinks/>
        </div>
    );
}

export default Abilities;