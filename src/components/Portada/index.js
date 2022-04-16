import React from "react";

import Foto from './Foto'
import Texto from './Texto'

import ImagenPortada1 from './../../img/portada1.jpg'
import ImagenPortada2 from './../../img/portada2.jpg'
import ImagenPortada3 from './../../img/portada3.jpg'
import ImagenPortada4 from './../../img/portada4.jpg'

const App = () => {

    const portadaStyle = {
        width: '100%',
        'height': '45rem',
        display: 'grid',
        'gridTemplateColumns': '1fr 1fr',
        'gridTemplateRows': '1fr'
    };

    const titulo1 = 'Mejor Calidad';
    const parrafo1 = 'Lorem ipsum dolor sit arnet, consertetur adipisicing elit. Esse provident asperiores, ipsa. In dicta vel, ipsa odio quasi perspicialist illo sint reiciendis voluptatum incidunt excepturi doloremque nisi impedit rerum nam expedita delectus molestiac voluptate, animi unde quia ex.';
    const titulo2 = 'Mejor Sabor';
    const parrafo2 = 'Lorem ipsum dolor sit arnet, consertetur adipisicing elit. Quod incidunt doloremque cumque, nobis possimus porro perferendis, suscipit. Laboriosam similique inventore sequi rem velit consequuntor quasi laborum maxime maiores aspernatur voluptatum, animi, aut atque alias sunt.';

    const fotoStyle = {
        width: '100%',
        'height': '15rem',
        display: 'grid',
        'gridTemplateColumns': '1fr',
        'gridTemplateRows': '1fr'
    }

    const fotoTextoStyle = {
        width: '100%',
        'height': '30rem',
        display: 'grid',
        'gridTemplateColumns': '1fr 1fr',
        'gridTemplateRows': '1fr'
    }

    return (<React.Fragment>
        <div id="portada" style={portadaStyle}>
            <div>
                <div style={fotoTextoStyle}>
                    <Foto imagen={ImagenPortada1} posicion={'left'} />
                    <Texto titulo={titulo1} parrafo={parrafo1} />
                </div>
                <div style={fotoStyle}>
                    <Foto imagen={ImagenPortada2} posicion={'center'} />
                </div>
            </div>
            <div>
                <div style={fotoStyle}>
                    <Foto imagen={ImagenPortada3} posicion={'center'} />
                </div>
                <div style={fotoTextoStyle}>
                    <Foto imagen={ImagenPortada4} posicion={'center'} />
                    <Texto titulo={titulo2} parrafo={parrafo2} />
                </div>
            </div>
        </div>
    </React.Fragment >)
}

export default App;