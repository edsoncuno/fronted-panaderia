import React from "react";
import Logo from './Logo'
import Link from './Link'
import LinkIcon from './LinkIcon'

import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const App = () => {

    const headerStyle = {
        'backgroundColor': 'white',
        width: '100%',
        //'z-index': '99',
        //position: 'fixed',
        //top: '0',
        padding: '1rem 0rem',// y x
        display: 'flex',//activar el flex
        'flexDirection': 'row',//ordenar de los elementos en una fila
        'justifyContent': 'space-around',//dejar espacios equitativos horizontalmente entre los elementos
        'alignItems': 'center',//centrear verticalmente*/
        'borderBottom': '2px solid grey'
    }

    return (<React.Fragment>
        <header id='#header' style={headerStyle}>
            <Logo />
            <div>
                <Link text={'Inicio'} href={'#header'} />
                <Link text={'Nosotros'} href={'#nosotros'} />
                <Link text={'Nuestro Chef'} href={'#nuestroChef'} />
                <Link text={'Nuestro Menu'} href={'#nuestroMenu'} />
                <Link text={'Contacto'} href={'#contacto'} />
            </div>
            <div>
                <LinkIcon icon={<FaFacebook size={'2rem'} color={'#4267B2'} />} href={'https://www.facebook.com'} />
                <LinkIcon icon={<FaTwitter size={'2rem'} color={'#00ACEE'} />} href={'https://www.twitter.com'} />
                <LinkIcon icon={<FaInstagramSquare size={'2rem'} color={'#E1306C'} />} href={'https://www.instagram.com'} />
            </div>
        </header>
    </React.Fragment >)
}

export default App;