import { HeaderHome, HeaderPortfolio, Back } from "./Links";

function ProjectHeader({ header, buttonNeeded }) {
    return (
        <div className="ProgramHeader">
            {buttonNeeded === "home" ? <HeaderHome /> :
                buttonNeeded === "portfolio" ? < HeaderPortfolio /> :
                    <Back link="/portfolio" />}
            <h1>{header}</h1>
        </div>
    );
}

export default ProjectHeader;
