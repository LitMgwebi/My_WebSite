import { Card, CardContent } from "@material-ui/core";

function PopupCard({ information }) {
    return (
        <Card className="popupCard">
            <CardContent className="popupCardContent">
                <h3>{information}</h3>
            </CardContent>
        </Card>
    )
}

export default PopupCard;