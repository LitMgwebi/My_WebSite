import ProjectHeader from "../Misc/ProjectHeader";
import TutorCard from "../Misc/TutorCard";

function Tutor() {
    return (
        <div id="Tutor">
            <ProjectHeader header="Tutor" buttonNeeded="home" />
            <div id="ContentContainer">
                <div className="tutorCards">
                    <TutorCard
                        contentHeader="What?"
                        tagLine="What is on offer?"
                        question="What?"
                    />
                    <TutorCard
                        contentHeader="Who?"
                        tagLine="Who will I be tutoring?"
                        question="Who?"
                    />
                    <TutorCard
                        contentHeader="When?"
                        tagLine="When are the sessions?"
                        question="When?"
                    />
                    {/*<TutorCard
                        contentHeader="Where?"
                        tagLine="Where are we going to be ?"
                        question="Where?"
                    />*/}
                    <TutorCard
                        contentHeader="Pricing?"
                        tagLine="How much will a session be?"
                        question="Pricing?"
                    />
                </div>
                <div className="tutorButton">
                    <button>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeEDWGtIxtHTtrxVa4xR1GUQ_YNrxqAtDZ8svym1xXpBtDLAw/viewform?usp=sf_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tutor;