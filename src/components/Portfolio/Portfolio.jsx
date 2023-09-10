import { Link } from 'react-router-dom';
import SiteCard from '../Misc/SiteCard';

const Portfolio = () => {
    return (
        <div id="Portfolio">
            <h1>Portfolio</h1>
            <Link to="/portfolio/python">Python</Link>
            <Link to="/portfolio/react">React</Link>
        </div>
    )
}

export default Portfolio;