import React from "react";
import Logo from './../../img/logo.png'

const App = () => {

    const imgStyle = {
        width: '3rem',
    }

    return (<React.Fragment>
        <a href="#portada">
            <img src={Logo} alt='logo' style={imgStyle} />
        </a>
    </React.Fragment >)
}

export default App;