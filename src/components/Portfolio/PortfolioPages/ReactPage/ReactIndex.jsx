import ProjectHeader from "../../../Misc/ProjectHeader";
import SiteCard from '../../../Misc/SiteCard';

function ReactIndex() {
    return(
        <div id="ReactIndex">
            <ProjectHeader header="React" buttonNeeded="portfolio"/>
            <div id="ContentContainer">
                <SiteCard 
                    routeLink="/portfolio/react/mywebsite" 
                    state={"program"} 
                    contentHeader="My Website"
                    imgLink={require("../../../../media/Cards/MyWebsite/coding.jpg")}
                    tagLine="The breakdown of this very website"
                /> 
            </div>
        </div>
    );
}

export default ReactIndex;