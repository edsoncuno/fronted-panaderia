import React from "react";

import Foto from './Foto'
import Texto from './Texto'

import ImagenPortada1 from './../../img/portada1.jpg'
import ImagenPortada2 from './../../img/portada2.jpg'
import ImagenPortada3 from './../../img/portada3.jpg'
import ImagenPortada4 from './../../img/portada4.jpg'

const App = () => {

    const portadaStyle = {
        // display block o display inline-block, alguno de ellos es el default de display
        // display:flex (flex-wrap: nowrap) coloca los elementos dentro de una fila
        display: 'flex',
        // flex-wrap: wrap, responsive, hace que los elementos de acomoden en multiples filas si no les acanza 1
        'flex-wrap': 'wrap',
        width: '100%',
        border: '1px solid red'
    };

    const mediaPortadaStyle = {
        width: '50%'
    };

    const titulo1 = 'Mejor Calidad';
    const parrafo1 = 'Lorem ipsum dolor sit arnet, consertetur adipisicing elit. Esse provident asperiores, ipsa. In dicta vel, ipsa odio quasi perspicialist illo sint reiciendis voluptatum incidunt excepturi doloremque nisi impedit rerum nam expedita delectus molestiac voluptate, animi unde quia ex.';
    const titulo2 = 'Mejor Sabor';
    const parrafo2 = 'Lorem ipsum dolor sit arnet, consertetur adipisicing elit. Quod incidunt doloremque cumque, nobis possimus porro perferendis, suscipit. Laboriosam similique inventore sequi rem velit consequuntor quasi laborum maxime maiores aspernatur voluptatum, animi, aut atque alias sunt.';

    return (<React.Fragment>
        <div id="portada" style={portadaStyle}>
            <div style={mediaPortadaStyle}>
                <Foto image={ImagenPortada1} size={'3rem'}/>
                <Texto titulo={titulo1} parrafo={parrafo1} />
                <Foto image={ImagenPortada2} size={'1rem'}/>
            </div>
            <div style={mediaPortadaStyle}>
                <Foto image={ImagenPortada3} size={'1rem'}/>
                <Texto titulo={titulo2} parrafo={parrafo2} />
                <Foto image={ImagenPortada4} size={'3rem'}/>
            </div>
        </div>
    </React.Fragment >)
}

export default App;
/*
 <section class="portada" id="portada">
                <div class="columna">
                    <div class="foto izquierda lightbox">
                    </div>
                    <div class="texto">
                        <h2>Mejor Calidad</h2>
                        <p>
                            Lorem ipsum dolor sit arnet, consertetur adipisicing elit. Esse provident
                            asperiores, ipsa. In dicta vel, ipsa odio quasi perspicialist illo sint 
                            reiciendis voluptatum incidunt excepturi doloremque nisi impedit rerum nam 
                            expedita delectus molestiac voluptate, animi unde quia ex.
                        </p>
                    </div>
                    <div class="foto_full izquierda lightbox">
                    </div>
                </div>
                <div class="columna">
                    <div class="foto_full derecha lightbox">
                    </div>
                    <div class="foto derecha lightbox">
                    </div>
                    <div class="texto">
                        <h2>Mejor Sabor</h2>
                        <p>
                            Lorem ipsum dolor sit arnet, consertetur adipisicing elit. Quod incidunt doloremque
                            cumque, nobis possimus porro perferendis, suscipit. Laboriosam similique inventore 
                            sequi rem velit consequuntor quasi laborum maxime maiores aspernatur voluptatum, 
                            animi, aut atque alias sunt.
                        </p>
                    </div>
                </div>
            </section>


body .principal .portada {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
body .principal .portada .columna {
    width: 50%;
    background: black;
    color: white;
    display: flex;
    flex-wrap: wrap;
}
body .principal .portada .columna .foto {
    background-size: cover;
    background-position: center;
    width: 50%;
}
body .principal .portada .columna .izquierda {
    background-image: url('../img/portada-1.jpg');
    background-position: left;
}
body .principal .portada .columna .derecha {
    background-image:url('../img/portada-4.jpg');
    opacity:0.8
}
body .principal .portada .columna .texto {
    width: 50%;
    padding: 3.375rem;
}
body .principal .portada .columna .texto h2{
    font-size: 1.8125rem;
    font-weight: 400;
    line-height: 2.6875rem;
    margin-bottom: 1.125rem;
}
body .principal .portada .columna .texto p{
    font-size: 0.9375rem;
    line-height: 1.75rem;
}
body .principal .portada .columna .foto_full {
    width: 100%;
    min-height: 15.25rem;
    background-size: cover;
    background-position: center;
}
body .principal .portada .columna .foto_full.izquierda{
    background-image: url('../img/portada-2.jpg');
    opacity: 0.8;
}
body .principal .portada .columna .foto_full.derecha{
    background-image: url('../img/portada-3.jpg');
    opacity: 0.8;
}

*/