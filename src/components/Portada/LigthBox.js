const App = (props) => {

    const appStyle = {
        'width': '100%',
        'height': '100%',
        'position': 'fixed',
        'zIndex': '99',
        'background': 'rgba(0,0,0,0.8)',
        'top': '0',
        'left': '0',
        'display': 'flex',
        'justifyContent': 'center',
    }

    const imgStyle = {
        'height': '100%',
    }

    return (<div style={appStyle}>
        <img style={imgStyle} src={props.imagen} logo='' alt=''>
        </img>
    </div>);
}

export default App;