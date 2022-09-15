const MyWebsite = ({navi}) => {
    return (
        <article id="myWebsite">
            <h3>My Website</h3>
            <p>Description</p>
            <p></p>
            <a href="">Simple Calculator</a>
            <button onClick={() => navi("index") }>Back to</button>
        </article>
    );
}

export default MyWebsite