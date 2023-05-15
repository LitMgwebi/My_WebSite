import {Abilities, About, Portfolio, Tutor} from "../Misc/Links";

function Home() {
    return(
        <div id="Index">
            <div className="ProjectHeader">
                <h1>Lithi Mgwebi</h1>
            </div>
            <div id="ContentContainer">
                <div className="IntroImage">
                    <img
                        src={require("../../media/MainPhoto.png")}
                        alt="Lithi"
                    />
                </div>
                {/*<div className="IntroParagraph">
                <p>Hi, my name is Lithi Mgwebi. I am a freelance web developer</p>      
            </div>*/}

                <div className="homeLinks">
                    <Portfolio /><Abilities /><About /><Tutor />
                </div>
            </div>

        </div>
    );
}

export default Home;