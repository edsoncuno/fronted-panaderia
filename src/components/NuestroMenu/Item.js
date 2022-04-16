import React from "react";

const App = (props) => {

    const itemStyle = {
        display: 'grid',
        'gridTemplateColumns': '8fr 2fr',
        'gridTemplateRows': '1fr',
        'borderBottom': '1px solid grey',
        margin: '2rem',
        'boxSizing': 'border-box',// fijar para que no se deforme con el padding
    }

    const columnaIzquierdaStyle = {
        display: 'grid',
        'gridTemplateColumns': '1fr',
        'gridTemplateRows': '3fr 5fr',
        'marginRight': '3rem',
        'boxSizing': 'border-box',// fijar para que no se deforme con el padding
    }

    return (<div style={itemStyle}>
        <div style={columnaIzquierdaStyle}>
            <div style={{ color: 'black', 'fontSize': '1.5rem' }}>{props.nombre}</div>
            <div style={{ color: 'grey' }}>{props.descripcion}</div>
        </div>
        <div style={{ display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'fontSize': '2rem' }} >${props.precio}</div>
    </div>);
}

export default App;