import React from "react";

const App = (props) => {

    const divStyle = {
        width: `${props.ancho}`,
        background: 'black',
        color: 'white',
        padding: '2rem',
    }

    const parrafoStyle = {
        'fontSize': '1rem',
        'lineHeight': '2rem',//interlineado
    }

    const tituloStyle = {
        'fontSize': '2rem',
        'marginBottom': '2rem'
    }

    return (
        <div style={divStyle}>
            <div style={tituloStyle}>{props.titulo}</div>
            <div style={parrafoStyle}>{props.parrafo}</div>
        </div>)
}

export default App;