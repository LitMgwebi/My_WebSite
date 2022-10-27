import { HeaderHome, HeaderPortfolio } from "./Links";

function ProjectHeader({header, buttonNeeded}){
    return(
        <div className="ProgramHeader">
            {buttonNeeded === "home"? <HeaderHome/>: <HeaderPortfolio/>}
            <h1>{header}</h1>
        </div>
    );
}

export default ProjectHeader;
