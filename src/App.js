import React from "react";

import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Header from './components/Header'
import Nosotros from './components/Nosotros'
import NuestroChef from './components/NuestroChef'
import Portada from './components/Portada'

const App = () => {

    React.useEffect(() => {
        document.title = 'Coffe and Cake'
    }, []);

    return (<React.Fragment>
        <Header />
        <Portada />
        <Nosotros />
        <NuestroChef />
        <Contacto />
        <Footer />
    </React.Fragment>);
}

export default App;