import React from "react";

const App = (props) => {

    const appStyle = {
        display: 'flex',
        'flexDirection': 'column',
        background: 'white',
        width: '15rem',
        border: '0.5rem double grey'
    }

    const fila1Style = {
        'fontSize': '1.5rem',
        display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'borderBottom': '1px solid grey',
        margin: '1.5rem',
        'marginTop': '2rem',
    }

    const fila2Style = {
        margin: '0rem 2rem',
        color: 'grey',
        display: 'flex',
        'flexDirection': 'column',
        'flexWrap': 'nowrap',
        'justifyContent': 'center',
        'alignItems': 'center',
        'textAlign': 'center'
    }

    return (<div style={appStyle}>
        <div style={fila1Style}>{props.titulo}</div>
        <div style={fila2Style}>{props.descripcion}</div>
    </div>);
}

export default App;