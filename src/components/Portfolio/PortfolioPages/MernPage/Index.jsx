import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

function Index({navi}){
    const height = "150"
    return(
        <div className="index">
            <Card className='card'>
                <CardActionArea 
                    onClick={() => navi("artBlog") }
                >
                    <CardMedia
                        component="img"
                        height={height}
                        // alt="Python"
                        // image={require("../../../media/python.jpg")} 
                    />
                    <CardContent>  
                        <h2 className="cardHeader">ArtBlog</h2>

                        <p className="cardTagLine">A description of this very website I built</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default Index;