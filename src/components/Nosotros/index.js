import React from "react";

const App = () => {

    const nosotrosStyle = {
        width: '100%',
        padding: '5rem',
        'boxSizing': 'border-box',// fijar para que no se deforme con el padding
        'height': '30rem',
        display: 'grid',
        'gridTemplateColumns': '2fr 4fr',
        'gridTemplateRows': '1fr'
    }

    const columnaIzquierdaStyle = {
        background: 'white',
        'borderRight': '1px solid grey',
        display: 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',// vertical
        'justifyContent': 'center'//horizontal
    }

    const columnaDerechaStyle = {
        background: 'white',
        'paddingLeft': '3rem',
        'fontSize': '1.1rem',
        'lineHeight': '2rem',
        color: 'grey'
    }

    const parrafo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, facere itaque voluptatibus in quasi aliquid reiciendis quidem quo. Laborum temporibus aut, velit soluta. Cum nostrum quam ipsam nisi. Aperiam cum ea beatae sit sapiente animi soluta adipisci vel suscipit voluptatem. Blanditiis assumenda odit, sunt voluptatibus molestiae iure, beatae placeat laudantium non explicabo earum nesciunt nostrum adipisci consequatur amet, voluptatum laborum aspernatur autem architecto quae dicta rem quisquam nemo repellat. Explicabo eaque magni asperiores libero ut expedita, voluptatibus cum ipsum harum a, molestiae hic! Debitis ab perspiciatis sequi, unde, ducimus, dolorum voluptates expedita commodi nisi, quos excepturi consectetur cupiditate odit cum.'

    return (<div id="nosotros" style={nosotrosStyle}>
        <div style={columnaIzquierdaStyle}>
            <div style={{ 'fontSize': '1.1rem', color: 'grey' }}>Nosotros</div>
            <div style={{ 'fontStyle': 'italic', 'fontSize': '3rem', color: 'black' }}>Conocenos</div>
        </div>
        <div style={columnaDerechaStyle}>
            {parrafo}
        </div>
    </div>)
}

export default App;