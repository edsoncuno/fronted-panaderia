import React from "react";
import './Formulario.css'

const App = () => {

    const appStyle = {
        'position': 'absolute',
        left: '25%',
        top: '45%',
        width: '50%',
        height: '45%',
        border: '1px solid grey',
        background: 'white',
        display: 'flex',
        'flexDirection':'column',
        'alignItems':'center',
        'justifyContent':'center'
    }

    return (<div style={appStyle}>
        <div>
            <input className="inputStyle" type="text" id="nombre" name="nombre" />
            <label className="labelStyle" htmlFor="nombre"  >Nombre</label>
        </div>
        <div>
            <input className="inputStyle" type="email" id="email" name="email" />
            <label className="labelStyle" htmlFor="email">Correo electrónico</label>
        </div>
        <div>
            <textarea className="inputStyle" name="mensaje" id="mensaje"></textarea>
            <label className="labelStyle" htmlFor="mensaje">Mensaje</label>
        </div>
        <input className="botonStyle" type="submit" value="Enviar" />
    </div>);
}

export default App;