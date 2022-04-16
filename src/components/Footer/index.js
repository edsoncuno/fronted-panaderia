import React from "react";

import RedesSociales from './RedesSociales'

const mainStyle = {
    background: 'black',
    height: '15rem',
    display: 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
}

const derechos = 'Todos los derechos reservados'

const App = () => {
    return (<footer style={mainStyle}>
        <div style={{ 'marginBottom': '1rem', 'fontSize': '1rem', color: 'white' }}>{derechos}</div>
        <div style={{ 'marginTop': '1rem' }}><RedesSociales /></div>
    </footer>)
}

export default App;