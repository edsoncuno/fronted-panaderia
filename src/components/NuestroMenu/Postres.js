import React from "react";
import Item from './Item'

const App = () => {

    const appStyle = {
        border: '0.5rem double grey',
        display: 'grid',
        'gridTemplateColumns': '1fr',
        'gridTemplateRows': '1fr 1fr 1fr 1fr'
    }

    const items = [
        {
            nombre: 'Lorem ipsum dolor.',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nostrum.',
            precio: '15'
        },
        {
            nombre: 'Donec placerat dignissim.',
            descripcion: 'Maecenas iaculis aliquam lectus, in sodales ligula. Nulla facilisis magna.',
            precio: '17'
        },
        {
            nombre: 'Nulla vestibulum.',
            descripcion: 'Nulla facilisis magna in malesuada dictum. Donec condimentum metus eros.',
            precio: '21'
        },
        {
            nombre: 'Sed semper.',
            descripcion: 'Vestibulum euismod neque id est ultricies pretium. Sed rutrum risus at congue suscipit.',
            precio: '20'
        },
    ]

    return (<div style={appStyle}>
        <Item nombre={items[0].nombre} descripcion={items[0].descripcion} precio={items[0].precio} />
        <Item nombre={items[1].nombre} descripcion={items[1].descripcion} precio={items[1].precio} />
        <Item nombre={items[2].nombre} descripcion={items[2].descripcion} precio={items[2].precio} />
        <Item nombre={items[3].nombre} descripcion={items[3].descripcion} precio={items[3].precio} />
    </div>);
}

export default App;