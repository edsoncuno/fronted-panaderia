import React from "react";

const divStyle = {
    widht: '100%',
    background: 'black',
    color: 'white',
    padding: '3rem',
}

const App = (props) => {
    return (<React.Fragment>
        <div style={divStyle}>
            <div style={{ 'font-size': '2rem' }}>{props.titulo}</div>
            <div style={{ 'font-size': '1rem' }}>{props.parrafo}</div>
        </div>
    </React.Fragment>)
}

export default App;