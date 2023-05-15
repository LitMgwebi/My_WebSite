import ProgramTemplate from "../../../Misc/ProgramTemplate";
import 'swiper/css';

function Stack() {
    return (
        <ul className="stackList">
            <li>Python</li>
            <li>Text File</li>
        </ul>
    );
}

function SimpleCalculator() {
    return(
        <div id="Index">
            <ProgramTemplate
                link="/portfolio/python"
                title="Simple Calculator"
                githubLink="https://github.com/LitMgwebi/SimpleCalculator"
                description="This was a small project I used to help me switch over to Python and learn the basics of the language. It is a program that logs in/signs up users using an authentication process that stores users in a text file. Once authenticated the user will be able to use the operation provided by the program. SimpleCalculator can only perform a handful on operations which include: addition, subtraction, multiplication, division, and getting the quotient and  exponent."
                programStack={<Stack />}
                images={[<img src={require("../../../../media/Cards/SimpleCalculator/SignupScreenshot.png")} alt="SignupScreenshot" />, <img src={require("../../../../media/Cards/SimpleCalculator/LoginScreenshot.png")} alt="LoginScreenshot" />, <img src={require("../../../../media/Cards/SimpleCalculator/InvalidScreenshot.png")} alt="InvalidScreenshot" />]}
            />
        </div>
    )
}

export default SimpleCalculator;