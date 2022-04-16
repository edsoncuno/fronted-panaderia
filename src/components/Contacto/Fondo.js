import React from "react";
import BG from './../../img/contacto-bg.jpg'

const App = () => {

    const appStyle = {
        width: '100%',
        height: '50rem',
        display: 'grid',
        'gridTemplateColumns': '1fr',
        'gridTemplateRows': '5fr 4fr',
    }

    const fila1Style = {
        background: `url(${BG})`,
        'backgroundSize': 'cover',//llena el contenedor con la imagen (width imagen = width contenedor)
        'backgroundPosition': 'center',//posicion la imagen horizontal y verticalmenet con respecto al contenedor
    }

    return (<div style={appStyle}>
        <div style={fila1Style}></div>
        <div style={{ background: 'white' }}></div>
    </div>)
}

export default App;