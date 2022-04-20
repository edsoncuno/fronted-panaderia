import Caja from './Caja'

const App = () => {

    const appStyle = {
        'gridColumn': '1/4',
        'gridRow': '2/3',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-evenly',
        'alignItems': 'center'
    }

    const dataCaja = {
        titulo1: 'Escríbenos',
        descripcion1: 'correo@correo.com',
        titulo2: 'Visítanos',
        descripcion2: 'Calle 123 #27-27 Ciudad X',
        titulo3: 'Horario',
        descripcion3: 'Martes a Domingo 11am - 9pm',
    }

    return (<div style={appStyle}>
        <Caja titulo={dataCaja.titulo1} descripcion={dataCaja.descripcion1} />
        <Caja titulo={dataCaja.titulo2} descripcion={dataCaja.descripcion2} />
        <Caja titulo={dataCaja.titulo3} descripcion={dataCaja.descripcion3} />
    </div>);
}

export default App;