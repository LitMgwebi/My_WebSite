import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import SocialLinks from '../Misc/SocialLinks';
import {Link} from "react-router-dom";

const Portfolio = () => {
    const height = "150"
    return (
        <div id="Portfolio">
            <div className="ProjectHeader">
                <h1>Portfolio</h1>
            </div>
            <div id="ContentContainer">
                <Card className='card'>
                    <Link 
                        to="/portfolio/python" 
                        state={"portfolio"}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height={height}
                                alt="Python"
                                image={require("../../media/python.jpg")} 
                            />
                            <CardContent>  
                                <h2 className="cardHeader">Python</h2>

                                <p className="cardTagLine">All of my python projects</p>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
                
                <Card className='card'>
                    <Link 
                        to="/portfolio/mern"
                        state={"portfolio"}    
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height={height}
                                alt="M.E.R.N"
                                image={require("../../media/mern.png")}
                            />
                            <CardContent>
                                <h2 className="cardHeader">M.E.R.N </h2>

                                <p className="cardTagLine">The projects I made merging MongoDB, ExpressJS, ReactJS, and NodeJS</p>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>

                <Card className='card'>
                    <Link 
                        to="/portfolio/react"
                        state={"portfolio"}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height={height}
                                alt="React"
                                image={require("../../media/react.png")} 
                            />
                            <CardContent>
                                <h2 className="cardHeader">React</h2>

                                <p className="cardTagLine">My React projects</p>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>            
            </div>
            <SocialLinks/>
        </div>
    )
}

export default Portfolio;