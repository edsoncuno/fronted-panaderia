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
            nombre: 'Cafe ipsum dolor.',
            descripcion: 'Maecenas iaculis aliquam lectus, in sodales ligula. Nulla facilisis magna.',
            precio: '4'
        },
        {
            nombre: 'Late dignissim.',
            descripcion: 'Vestibulum euismod neque id est ultricies pretium. Sed rutrum risus at congue suscipit.',
            precio: '6'
        },
        {
            nombre: 'Cappuccino vestibulum.',
            descripcion: 'Etiam aliquet at mi in aliquet. Duis in arcu sodales, gravida lorem quis.',
            precio: '5'
        },
        {
            nombre: 'Cafe semper.',
            descripcion: 'Praesent ac pellentesque urna, ut lacinia erat. Donec in euismod erat. Mauris eu.',
            precio: '8'
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