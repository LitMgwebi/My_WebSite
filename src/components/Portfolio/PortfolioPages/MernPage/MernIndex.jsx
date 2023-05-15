import SiteCard from "../../../Misc/SiteCard";
import ProjectHeader from "../../../Misc/ProjectHeader";

function MernIndex() {
    return(
        <div id="Index">
            <ProjectHeader header="M.E.R.N Projects"/>
            <div id="ContentContainer">
                <SiteCard 
                    routeLink="/portfolio/mern/artblog" 
                    state={"program"} 
                    contentHeader="ArtBlog"
                    imgLink={require("../../../../media/Cards/SimpleCalculator/calculator.png")}
                    tagLine="Click to see the artblog"
                /> 
            </div>
        </div>
    );
}

export default MernIndex;