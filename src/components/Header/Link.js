import React from "react";
import './Link.css'

const App = (props) => {

    const aStyle = {
        'textDecoration': 'none',// quietar subrayado
        transition: 'all 0.3s ease',//los cambios de estados son mas subes
        margin: '0rem 0.5rem',// y x
        'fontSize': '1.5rem'
    }

    //let movimiento;

    const irSeccion = (e) => {
        e.preventDefault();
        //console.log(e.target.getAttribute('href'));
        console.log(document.querySelector(e.target.getAttribute('href')).offsetTop);
        //console.log(this.getAttribute('href').offsetTop);
        //const destino = this.getAttribute('href');
        //console.log(destino)
        //let temp = document.getElementById('contacto').offsetTop
        //window.scroll(0,2906);
    }

    /*
    const moverScroll = (yActual, yDestino) => {
        if (yActual < yDestino) {
            yActual += 10;
            window.scroll(0, yActual);
            if (yActual >= yDestino) {
                clearInterval(movimiento);
            }
        }
        else {
            yActual -= 10;
            window.scroll(0, yActual);
            if (yActual <= yDeLaSeccion) {
                clearInterval(movimiento);
            }
        }
    }*/

    return (<React.Fragment>
        <a href={props.href} style={aStyle} onClick={irSeccion}>
            {props.text}
        </a>
    </React.Fragment >)
}

export default App;