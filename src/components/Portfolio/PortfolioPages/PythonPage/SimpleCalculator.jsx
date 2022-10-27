import ProgramTemplate from "../../../Misc/ProgramTemplate";
import 'swiper/css';

function Stack() {
    return (
        <div className="programStack">
            <div className="ProjectHeader">
                <h4>Stack</h4>
            </div>
            <ul className="stackList">
                <li>Python</li>
                <li>Text File</li>
            </ul>
        </div>
    );
}

function SimpleCalculator() {
    return(
        <div id="SimpleCalculator">
            <ProgramTemplate
                link="/portfolio/python"
                title="Simple Calculator"
                githubLink="https://github.com/LitMgwebi/SimpleCalculator"
                description="This was a small project I used to help me switch over to Python and learn the basics of the language. It is a program that logs in/signs up users using an authentication process that stores users in a text file. Once authenticated the user will be able to use the operation provided by the program. SimpleCalculator can only perform a handful on operations which include: addition, subtraction, multiplication, division, and getting the quotient and  exponent."
                programStack={<Stack/>}
                firstImage={<img src={require("../../../../media/Cards/SimpleCalculator/SignupScreenshot.png")} alt="SignupScreenshot"/>}
                secondImage={<img src={require("../../../../media/Cards/SimpleCalculator/LoginScreenshot.png")} alt="LoginScreenshot"/>}
                thirdImage={<img src={require("../../../../media/Cards/SimpleCalculator/InvalidScreenshot.png")} alt="InvalidScreenshot"/>}
            />
        </div>
    )
}

export default SimpleCalculator;