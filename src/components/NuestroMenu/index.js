import React from "react";

import Cafes from './Cafes'
import Postres from './Postres'
import './index.css'

const App = () => {

    const [menu, setMenu] = React.useState('postres');

    const mainStyle = {
        width: '100%',
        height: '70rem',
        padding: '6% 20%',
        'boxSizing': 'border-box',// fijar para que no se deforme con el padding
        display: 'grid',
        'gridTemplateColumns': '1fr',
        'gridTemplateRows': '2fr 1fr 20fr'
    }

    const tituloStyle = {
        'fontSize': '3rem',
        'fontStyle': 'italic',
        'fontWeight': 'bold',
        display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
    }

    const categoriasStyle = {
        display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
    }

    const linkCategoriaStyle = {
        margin: '0rem 0.5rem',
        'textDecoration': 'none',
        'fontWeight': 'bold',
        'cursor': 'pointer',//hacer que al colocar el mouse sobre el cambie el icono a una dedo
        'transition': 'all .3s ease',
    }

    const clickPostres = () => {
        setMenu('postres');
    }

    const clickCafes = () => {
        setMenu('cafes');
    }

    return (<div style={mainStyle} id='nuestroMenu'>
        <div style={tituloStyle}>Nuestro menú</div>
        <div style={categoriasStyle}>
            <div className="categoria" style={linkCategoriaStyle} onClick={clickPostres}>POSTRES</div>
            <div className="categoria" style={linkCategoriaStyle} onClick={clickCafes}>CAFÉS</div>
        </div>
        {menu === 'postres' ? <Postres /> : <Cafes />}
    </div>);
}

export default App;