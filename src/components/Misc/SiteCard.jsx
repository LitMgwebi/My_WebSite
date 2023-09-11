import { Link } from "react-router-dom";

function SiteCard({ routeLink, state, contentHeader, imgLink, tagLine }) {
    return (
        <article className="card">
            <Link
                to={routeLink}
                state={state}
            >
                <div className="cardMedia">
                    <figure>
                        <img
                            src={imgLink}
                            alt={contentHeader}
                        />
                    </figure>
                </div>
                <div className="cardContent">
                    <h3>{contentHeader}</h3>
                    <p>{tagLine}</p>
                </div>
            </Link>
        </article>
    );
}

export default SiteCard;