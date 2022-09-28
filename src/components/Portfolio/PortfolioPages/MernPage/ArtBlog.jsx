function ArtBlog({navi}) {
    return (
        <div id="myWebsite">
            <h3>ArtBlog</h3>
            <p>Description</p>
            <button onClick={() => navi("index") }>Back</button>
        </div>
    );
}

export default ArtBlog;