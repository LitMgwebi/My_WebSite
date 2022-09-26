function ArtBlog({navi}) {
    return (
        <div id="myWebsite">
            <h2>ArtBlog</h2>
            <p>Description</p>
            <button onClick={() => navi("index") }>Back</button>
        </div>
    );
}

export default ArtBlog;