import { pLanguages, FSFrameworks } from "./units/Stats";
import {
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

function Skills(){
    const outerRadius= 60;
    const width = 350;
    const height = 160;
    
    return(
        <div id="ContentContainer">
            <div className="RadarChart">
                <h4>Programming Languages</h4>
                <RadarChart outerRadius={outerRadius} width={width} height={height} data={pLanguages}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="subject"/>
                    <PolarRadiusAxis/>
                    <Radar 
                        name="Programming Languages"
                        dataKey="A"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart>  
            </div>

            <div className="RadarChart">
                <h4>Full-Stack Frameworks</h4>
                <RadarChart outerRadius={outerRadius} width={width} height={height} data={FSFrameworks}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="subject"/>
                    <PolarRadiusAxis/>
                    <Radar 
                        name="Full-Stack Frameworks"
                        dataKey="A"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart>  
            </div>
        </div>
    )
}

export default Skills;