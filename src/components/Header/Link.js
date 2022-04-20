import React from "react";
import './Link.css'

const App = (props) => {

    const aStyle = {
        'textDecoration': 'none',// quietar subrayado
        transition: 'all 0.3s ease',//los cambios de estados son mas subes
        margin: '0rem 0.5rem',// y x
        'fontSize': '1.5rem'
    }

    const velocidad = 10;
    let movimientoDelScroll;
    let origen;
    let destino;

    const irSeccion = (e) => {
        e.preventDefault();
        clearInterval(movimientoDelScroll);
        origen = window.pageYOffset;
        destino = document.querySelector(e.target.getAttribute('href')).offsetTop-5*16;
        movimientoDelScroll = setInterval(moverScroll, 1);
    }

    const moverScroll = () => {
        if (origen < destino) {
            origen += velocidad;
            window.scroll(0, origen);
            if (origen >= destino) {
                clearInterval(movimientoDelScroll);
            }
        }
        else {
            origen -= velocidad;
            window.scroll(0, origen);
            if (origen <= destino) {
                clearInterval(movimientoDelScroll);
            }
        }
    }

    return (<React.Fragment>
        <a href={props.href} style={aStyle} onClick={irSeccion}>
            {props.text}
        </a>
    </React.Fragment >)
}

export default App;