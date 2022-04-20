import React from "react";
import Foto from './../../img/chef-1.jpg'

const App = () => {

    const mainStyle = {
        width: '100%',
        padding: '5rem',
        background: 'black',
        'boxSizing': 'border-box',// fijar para que no se deforme con el padding
        'height': '30rem',
        display: 'grid',
        'gridTemplateColumns': '1fr 1fr',
        'gridTemplateRows': '1fr'
    }

    const columnaDerechaStyle = {
        display: 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
    }

    const titulo = 'Nuestro Chef';

    const parrafo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, fuga. Blanditiis assumenda odit, sunt voluptatibus molestiae iure, beatae placeat laudantium non explicabo earum nesciunt nostrum adipisci consequatur amet'

    const columnaIzquierdaStyle = {
        background: `url(${Foto})`,
        'backgroundSize': 'cover',
        'backgroundPosition': 'center',
        margin: '0rem 3rem',
    }

    return (<div id="nuestroChef" style={mainStyle}>
        <div style={columnaIzquierdaStyle}></div>
        <div style={columnaDerechaStyle}>
            <div style={{ color: 'white', 'fontSize': '3rem', 'fontStyle': 'italic' }}>{titulo}</div>
            <div style={{ color: 'grey', 'fontSize': '1rem', 'lineHeight': '2rem' }}>{parrafo}</div>
        </div>
    </div>)
}

export default App;