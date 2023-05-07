import PopupCard from "../Misc/PopupCard";

function Popup(props) {
    let paragraph = "";

    if (props.question === "What?") {
        paragraph = (
            <div className="paragraph">
                <PopupCard information="General Coding Practices" />
                <PopupCard information="Error Comprehension and management" />
                <PopupCard information="Web Design and Development" />
                <PopupCard information="Understanding Javascript Syntax" />
                <PopupCard information="Understanding C# Syntax" />
            </div>
        );
    }
    else if (props.question === "Who?") {
        paragraph = (
            <div className="paragraph">
                <PopupCard information="Anyone with 1st and 2nd year level coding modules" />
                <PopupCard information="Who wants a hands on 101 in software development" />
            </div>
        );
    }
    else if (props.question === "Where?") {
        paragraph = (
            <div className="paragraph">
                <PopupCard information="Campus Key Scarborough" />
                <PopupCard information="North Campus" />
                <PopupCard information="Anywhere in Summerstrand and Humewood (an additional R30)" />
            </div>
        );
    }
    else if (props.question === "When?") {
        paragraph = (
            <div className="paragraph">
                <PopupCard information="10 am - 11 pm" />
                <PopupCard information="16 pm - 17 pm" />
            </div>
        );
    }
    else if (props.question === "Pricing?") {
        paragraph = (
            <div className="paragraph">
                <PopupCard information="1hr session at Campus Key Scarborough or North Campus : R150" />
                <PopupCard information="1hr session anywhere else in Summerstrand / Humewood : R180" />
            </div>
        );
    }

    return (
        <div className="popup-box">
            <div className="box">
                <h3>{props.question}</h3>
                {paragraph}

                <div className="popupButton">
                    <button onClick={props.handleClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Popup