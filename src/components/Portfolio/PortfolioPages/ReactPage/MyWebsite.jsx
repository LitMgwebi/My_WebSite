import ProgramTemplate from "../../../Misc/ProgramTemplate";

const Stack = () => {
    return(
        <div className="programStack">
            <div className="ProjectHeader">
                <h4>Stack</h4>
            </div>
            <ul className="stackList">
                <li>ReactJS</li>
                <li>React-pdf</li>
                <li>React-dom</li>
                <li>React-router-dom</li>
                <li>Recharts</li>
                <li>Swiper</li>
                <li>React-slick</li>
                <li>React-router</li>
                <li>React-pageflip</li>
                <li>Material-UI</li>
            </ul>
        </div>
    );
}
const MyWebsite = () => {
    return (
        <div id="MyWebsite">
            <ProgramTemplate
                link="/portfolio/react"
                title="My Website"
                githubLink="https://github.com/LitMgwebi/My_WebSite"
                description="This program is my portfolio site that you are currently on. It is the hub where all of my social media sites will converge. This site is also a means I will use to showcase my current and future github projects. From this centralized website, people will be able to view all of my github projects, get means of which to contact me, and get linked to all of social media."
                programStack={<Stack/>}
                firstImage={<img src={require("../../../../media/Cards/MyWebsite/Homepage.png")} alt="homepage"/>}
                secondImage={<img src={require("../../../../media/Cards/MyWebsite/portfolio.png")} alt="portfolio"/>}
                thirdImage={<img src={require("../../../../media/Cards/MyWebsite/abilities.png")} alt="abilities"/>}
            />
        </div>
    );
}

export default MyWebsite