import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
                    <p className="cardTagLine">{tagLine}</p>
                </CardContent>
                
            </Link>
        </Card>
    );
}

export default SiteCard;