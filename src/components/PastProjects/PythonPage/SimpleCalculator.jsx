function SimpleCalculator({navi}) {
    return(
        <div id="simpleCalculator">
            <h2>Simple Calculator</h2>
            <p>Description</p>
            <button onClick={() => navi("index") }>Back</button>
        </div>
    )
}

export default SimpleCalculator;