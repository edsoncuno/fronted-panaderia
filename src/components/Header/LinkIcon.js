import React from "react";

const App = (props) => {

    const aStyle = {
        margin: '0rem 0.5rem',// y x
    }

    return (<React.Fragment>
        <a href={props.href} style={aStyle}>
            {props.icon}
        </a>
    </React.Fragment >)
}

export default App;