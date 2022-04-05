import React from "react";

const App = (props) => {

    const divStyle = {
        width: '100%',
        height: `${props.size}`,
        background: `url(${props.image})`,
        'background-size': 'cover',//llena el contenedor con la imagen (imagen > contenedor)
        'background-position': 'center',//posicion la imagen horizontal y verticalmenet con respecto al contenedor
        opacity: '0.9',// vuelve blanca la imagen si llega a 0
    }

    return (<React.Fragment>
        <div style={divStyle}>
        </div>
    </React.Fragment>)
}

export default App;