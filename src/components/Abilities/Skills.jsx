import { pLanguages, FSFrameworks } from "./units/Stats";
import {
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

function Skills(){
    return(
        <div id="ContentContainer">
            <div className="RadarChart">
                <p>Programming Languages</p>
                <RadarChart outerRadius={90} width={500} height={180} data={pLanguages}>
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
                <p>Full-Stack Frameworks</p>
                <RadarChart outerRadius={90} width={500} height={180} data={FSFrameworks}>
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