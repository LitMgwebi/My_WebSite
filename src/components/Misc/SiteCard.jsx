import { Card, CardContent, CardMedia } from '@material-ui/core';
import {Link} from "react-router-dom";

function SiteCard({routeLink, state, contentHeader,imgLink, tagLine}) {
    // const height = "130";
    return(
        <Card className="card">
            <Link
                to={routeLink}
                state={state}
            >
                <CardMedia
                    component="img"
                    // height={height}
                    alt={contentHeader}
                    image={imgLink}
                    className="cardMedia"
                />
                <CardContent className='cardContent'>
                    <h3 className="cardHeader">{contentHeader}</h3>
                </CardContent>
                
            </Link>
        </Card>
    );
}

export default SiteCard;