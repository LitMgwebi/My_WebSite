import Tabs from "./Tabs";
import ProjectHeader from "../Misc/ProjectHeader";

function About() {
    return (
        <div id="About">
            <ProjectHeader header="About Me" buttonNeeded="home" />
            <Tabs/>
        </div>
    );
}

export default About;