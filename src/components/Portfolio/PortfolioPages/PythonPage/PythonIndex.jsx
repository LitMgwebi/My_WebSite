import SiteCard from "../../../Misc/SiteCard";

function PythonIndex(){
    return(
        <div id="Index">
            <div id="ContentContainer">
                <SiteCard 
                    routeLink="/portfolio/python/simpleCalculator" 
                    state={"program"} 
                    contentHeader="Simple Calculator"
                    imgLink={require("../../../../media/Cards/SimpleCalculator/calculator.png")}
                    tagLine="A simple calculator with built-in authentication functionality"
                />                
            </div>
        </div>
    );
}

export default PythonIndex;