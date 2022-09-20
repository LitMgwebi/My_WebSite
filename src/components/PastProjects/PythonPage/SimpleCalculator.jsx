function SimpleCalculator({navi}) {
    return(
        <div id="simpleCalculator">
            <h2>Simple Calculator</h2>
            <p>
This was a small project I used to help me switch over to Python and learn the basics of the language. It is a program that logs in/signs up users using an authentication process that stores users in a text file. Once authenticated the user will be able to use the operation provided by the program. SimpleCalculator will perform a handful on operations which include: addition, subtraction, multiplication, division, and getting the quotient and  exponent.</p>
            <button onClick={() => navi("index") }>Back</button>
        </div>
    )
}

export default SimpleCalculator;