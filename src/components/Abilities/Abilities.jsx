import Skills from "./Skills";
import Certifications from "./Certifications";
import ProjectHeader from "../Misc/ProjectHeader";

const Abilities = () => {
    return(
        <div id="Abilities">
            <ProjectHeader header="Abilities" buttonNeeded="home"/>

            <div className="ProjectHeader">
                <h3>Skills</h3>
            </div>
            <Skills/>

            <div className="ProjectHeader">
                <h3>Certifications</h3>
            </div>
            <Certifications/>
        </div>
    );
}

export default Abilities;