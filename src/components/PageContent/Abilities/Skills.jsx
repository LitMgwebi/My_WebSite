import {useState} from "react"; 
import {
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    PolarRadiusAxis
} from "recharts";
import { Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

function Skills(){
    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open);
    }

    const pLanguages = [
        {
            subject:"Python",
            A: 70,
        },
        {
            subject: "Javascript/TypeScript",
            A: 85
        },
        {
            subject: "C#",
            A: 70
        },
        {
            subject: "PHP",
            A: 25
        },
        {
            subject: "Machine",
            A: 30
        }
    ]
    return(
        <div id="Skills">
            <button onClick={handleClick}>Skills
                {open ?  <ExpandMore/>: <ExpandLess/>}
            </button>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className="RadarChart">
                    <RadarChart cx={150} cy={100} outerRadius={80} width={500} height={500} data={pLanguages}>
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="subject"/>
                        <PolarRadiusAxis/>
                        <Radar 
                            name="Lithi"
                            dataKey="A"
                            stroke="#8884d8"
                            fill="#8884d8"
                            fillOpacity={0.6}
                        />
                    </RadarChart>  
                </div>
            </Collapse>
        </div>
    )
}

export default Skills;