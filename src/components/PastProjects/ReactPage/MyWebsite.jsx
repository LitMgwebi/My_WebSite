const MyWebsite = ({navi}) => {
    return (
        <div id="myWebsite">
            <h2>My MyWebsite</h2>
            <p>Description</p>
            <button onClick={() => navi("index") }>Back to</button>
        </div>
    );
}

export default MyWebsite