import ProgramTemplate from "../../../Misc/ProgramTemplate";

function Stack(){
    return(
        <div className="programStack">
            <div className="ProjectHeader">
                <h4>Stack</h4>
            </div>
            <ul>
                <li>React</li>
                <li>React-pdf</li>
            </ul>
        </div>
    )
}
function ArtBlog() {
    return (
        <div>
            <ProgramTemplate
                link="/portfolio/mern"
                title="ArtBlog"
                githubLink="https://github.com/LitMgwebi/My_WebSite"
                description="Welcome ladies and gentlemen, to the world renowned ArtBlog"
                programStack={<Stack/>}
                firstImage={"firstImage"}
                secondImage={"secondImage"}
                thirdImage={"thirdImage"}
            />
        </div>
    );
}

export default ArtBlog;