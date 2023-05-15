import SiteCard from '../Misc/SiteCard';
import ProjectHeader from '../Misc/ProjectHeader';

const Portfolio = () => {
    return (
        <div id="Index">
            <ProjectHeader header="Portfolio" buttonNeeded="home"/>
            <div id="ContentContainer">
                <SiteCard 
                    routeLink="/portfolio/python" 
                    state={"program"} 
                    contentHeader="Python" 
                    imgLink={require("../../media/Cards/Portfolio/python.jpg")}
                    tagLine="Python Projects"
                />                
                {/* <SiteCard 
                    routeLink="/portfolio/mern"
                    state={"program"} 
                    contentHeader="M.E.R.N" 
                    imgLink={require("../../media/Cards/Portfolio/mern.png")}
                    tagLine="The projects I made merging MongoDB, ExpressJS, ReactJS, and NodeJS"
                /> */}
                <SiteCard 
                    routeLink="/portfolio/react"
                    state={"program"} 
                    contentHeader="React" 
                    imgLink={require("../../media/Cards/Portfolio/react.png")} 
                    tagLine="React projects"
                />         
            </div>
        </div>
    )
}

export default Portfolio;