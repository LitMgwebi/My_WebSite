import FindMe from "./FindMe";

const Intro = () => {
    return (
        <div id="Intro">
            <img  
                src={require("../../media/IMG-20210503-WA0027.jpg")} 
                alt="Lithi" 
                width="175"
                height="300"/>
        
            <p>Hi this is the intro paragraph. This is where I'll be speaking a bit about myself.</p>

            <FindMe/>
        </div>
    );
}

export default Intro;