import {
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

function Chart({title, stats}) {
    const outerRadius= 60;
    const width = 380;
    const height = 170;

    return (
        <div className="RadarChart">
            <h4>{title}</h4>
            <RadarChart outerRadius={outerRadius} width={width} height={height} data={stats}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="subject"/>
                <PolarRadiusAxis/>
                <Radar 
                    name={title}
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
            </RadarChart> 
        </div>
    )
}

export default Chart