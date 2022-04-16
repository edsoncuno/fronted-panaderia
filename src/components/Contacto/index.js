import React from "react";
import Fondo from './Fondo'
import Formularion from './Formulario'
import Informacion from './Informacion'

const App = () => {

    const appStyle = {
        position: 'relative'
    }

    return (<div id="contacto" style={appStyle}>
        <Fondo />
        <Formularion />
        <Informacion />
    </div>)
}

export default App;