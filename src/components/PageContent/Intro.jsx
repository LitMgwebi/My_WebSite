import FindMe from "./FindMe";

const Intro = () => {
    return (
        <div id="Intro">
            <img  
                src={require("../../media/IMG-20210503-WA0027.jpg")} 
                alt="Lithi" 
                width="175"
                height="300"/>
        
            <p>Hi, my name is Lithi Mgwebi. I am a freelance web developer</p>

            <FindMe/>
        </div>
    );
}

export default Intro;