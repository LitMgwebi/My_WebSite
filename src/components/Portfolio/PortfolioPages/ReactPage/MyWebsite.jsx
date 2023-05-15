import ProgramTemplate from "../../../Misc/ProgramTemplate";

const Stack = () => {
    return(
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
    );
}
const MyWebsite = () => {
    return (
        <div id="Index">
            <ProgramTemplate
                link="/portfolio/react"
                title="My Website"
                githubLink="https://github.com/LitMgwebi/My_WebSite"
                description="This program is my portfolio site that you are currently on. It is the hub where all of my social media sites will converge. This site is also a means I will use to showcase my current and future github projects. From this centralized website, people will be able to view all of my github projects, get means of which to contact me, and get linked to all of social media."
                programStack={<Stack/>}
                images={[<img src={require("../../../../media/Cards/MyWebsite/Homepage.png")} alt="homepage"/>, <img src={require("../../../../media/Cards/MyWebsite/portfolio.png")} alt="portfolio"/>, <img src={require("../../../../media/Cards/MyWebsite/abilities.png")} alt="abilities"/>]}
            />
        </div>
    );
}

export default MyWebsite