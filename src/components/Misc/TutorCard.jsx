import { Card, CardContent, CardActions } from "@material-ui/core";
import { useState } from "react";
import Popup from "../Tutor/Popup";

function TutorCard({ contentHeader, tagLine, question }) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Card className="tutorCard">
            <CardContent className="tutorCardContent">
                <div className="cardQuestion">
                    <h1>{contentHeader}</h1>
                    <h4>{tagLine}</h4>
                </div>
                <CardActions className="tutorCardActions">
                    <button onClick={togglePopup}>View</button>
                </CardActions>
            </CardContent>
            {isOpen && <Popup
                question={question}
                handleClose={togglePopup}
            />}
        </Card>
    )
}

export default TutorCard;