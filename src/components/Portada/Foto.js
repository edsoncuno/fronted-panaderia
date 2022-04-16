import React from "react";
import LigthBox from './LigthBox'
import { useState } from "react";

const App = (props) => {

    const [ligthbox, setLigthbox] = useState(false);

    const divStyle = {
        width: `${props.ancho}`,
        height: `${props.altura}`,
        background: `url(${props.imagen})`,
        'backgroundSize': 'cover',//llena el contenedor con la imagen (imagen = width contenedor)
        'backgroundPosition': `${props.posicion}`,//posicion la imagen horizontal y verticalmenet con respecto al contenedor
    }

    const clickOnImage = () => {
        if (ligthbox) {
            setLigthbox(false);
        } else {
            setLigthbox(true);
        }
    }

    return (
        <div style={divStyle} onClick={clickOnImage}>
            {ligthbox ? <LigthBox imagen={props.imagen} /> : null}
        </div>)
}

export default App;