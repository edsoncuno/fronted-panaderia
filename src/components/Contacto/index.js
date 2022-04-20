import BG from './../../img/contacto-bg.jpg'
import Informacion from './Informacion'
import Form from './Form'

const App = () => {

    const appStyle = {
        'width': '100%',
        'height': '50rem',
        'display': 'grid',
        'gridTemplateColumns': '25% 50% 25%',
        'gridTemplateRows': '10% 25% 10% 20% 25% 10%',
    }

    const fondoStyle = {
        'gridColumn': '1/4',
        'gridRow': '1/5',
        'background': `url(${BG})`,
        'backgroundSize': 'cover',
        'backgroundPosition': 'center',
    }

    const esPosibleVerElFondo = (yTopCurrent, yBottomCurrent, yTopElement, yBottomElement) => {
        if (yBottomCurrent >= yTopElement && yTopCurrent <= yBottomElement) {
            return true;
        }
    }

    const parallax = () => {
        const yTopCurrent = window.pageYOffset;// position actual de 'y' del top de la ventana
        const windowHeight = window.outerHeight;// altura de la ventana
        const yBottomCurrent = yTopCurrent + windowHeight; //valor actual de 'y' del bottom de la ventana
        const element = document.getElementById("elementParallax");
        const yTopElement = element.offsetTop;// 'y' top del elemento
        const elementHeight = element.offsetHeight;// altura del elemento
        const yBottomElement = yTopElement + elementHeight;// 'y' bottom del elemento
        if (esPosibleVerElFondo(yTopCurrent, yBottomCurrent, yTopElement, yBottomElement)) {
            const velocidad = 1.2;
            // velocidad debe ser superior a 1 para un seguimiento suave
            element.style.backgroundPositionY = (yTopCurrent - yTopElement) / velocidad + 'px';
            // cambiar la posicion del background 
        } else {
            element.style.backgroundPositionY = '0px';
        }
    }

    window.addEventListener('scroll', parallax);


    return (<div id="contacto" style={appStyle}>
        <div id="elementParallax" style={fondoStyle}></div>
        <div style={{ 'background': 'white', 'gridColumn': '1/4', 'gridRow': '5/7' }}></div>
        <Informacion />
        <Form />
    </div>);
}

export default App;