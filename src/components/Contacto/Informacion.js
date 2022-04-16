import React from "react";
import Cajita from './Cajita'

const App = () => {

    const appStyle = {
        'position': 'absolute',
        left: '0%',
        top: '10%',
        width: '100%',
        height: '25%',
        display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-evenly'
    }

    return (<div style={appStyle}>
        <Cajita titulo={'Escríbenos'} descripcion={'correo@correo.com'} />
        <Cajita titulo={'Visítanos'} descripcion={'Calle 123 #27-27 Ciudad X'}/>
        <Cajita titulo={'Horario'} descripcion={'Martes a Domingo 11am - 9pm'}/>
    </div>);
}

export default App;