import React from "react";

import Header from './components/Header'
import Portada from './components/Portada'
import Nosotros from './components/Nosotros'
import NuestroChef from './components/NuestroChef'
import NuestroMenu from './components/NuestroMenu/index'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const App = () => {

    React.useEffect(() => {
        document.title = 'Coffe and Cake'
    }, []);

    return (<React.Fragment>
        <Header />
        <Portada />
        <Nosotros />
        <NuestroChef />
        <NuestroMenu />
        <Contacto />
        <Footer />
    </React.Fragment>);
}

export default App;