import SiteCard from '../../../Misc/SiteCard';

function ReactIndex() {
    return(
            <>
                <SiteCard 
                    routeLink="/portfolio/react/mywebsite" 
                    state={"program"} 
                    contentHeader="My Website"
                    imgLink={require("../../../../media/Cards/MyWebsite/coding.jpg")}
                    tagLine="The breakdown of this very website"
                /> 
            </>
    );
}

export default ReactIndex;