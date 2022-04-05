import React from "react";

const App = (props) => {

    const aStyle = {
        'text-decoration': 'none',// quietar subrayado
        color: 'black',// color negro en las letras
        transition: 'all 0.3s ease',//los cambios de estados son mas subes
        margin: '0rem 0.5rem',// y x
        'font-size': '1.5rem'
    }

    return (<React.Fragment>
        <a href={props.href} style={aStyle}>
            {props.text}
        </a>
    </React.Fragment >)
}

export default App;