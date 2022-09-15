const Intro = () => {
    return (
        <div id="Intro">
            <div className="IntroImage">
                <img  
                    src={require("../../media/IMG-20210503-WA0027.jpg")} 
                    alt="Lithi" 
                />
            </div>
            <div className="IntroParagraph">
                <p>Hi, my name is Lithi Mgwebi. I am a freelance web developer</p>      
            </div>
        </div>
    );
}

export default Intro;