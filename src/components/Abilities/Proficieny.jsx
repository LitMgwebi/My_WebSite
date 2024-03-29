import { pLanguages, BEFrameworks, development, database } from "./units/Stats";
import Chart from "../Misc/Chart";

function Proficieny() {
    return (
        <div className="proficiency">
            <Chart title="Types of Development" stats={development} />
            <Chart title="Programming Languages" stats={pLanguages} />
            <Chart title="Back-end Frameworks" stats={BEFrameworks} />
            <Chart title="Database" stats={database} />
            {/* <Chart title="UI" stats={UI}/> */}
        </div>
    )
}

export default Proficieny;