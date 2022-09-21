const MyWebsite = ({navi}) => {
    return (
        <article id="myWebsite">
            <h3>My Website</h3>
            <p className="Description">Hi world, welcome. This is program is my website.</p>
            <p className="Purpose">This program is the hub where all of my social media sites will converge. This site is also a means I will use to showcase my current and future github projects. From this centralized website, people will be able to view all of my github projects, get means of which to contact me, and get linked to all of social media.</p>
            <a href="https://github.com/LitMgwebi/My_WebSite">Simple Calculator</a>
            <img src="https://github.com/LitMgwebi/My_WebSite" alt="myWebsite" />
            <button onClick={() => navi("index") }>Back to</button>
        </article>
    );
}

export default MyWebsite