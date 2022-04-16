import React from "react";

import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'

const App = (props) => {

    const aStyle = {
        margin: '0rem 0.5rem',// y x
    }

    return (<div>
        <a href={'https://www.facebook.com'} style={aStyle}>
            <FaFacebook size={'2rem'} color={'white'} />
        </a>
        <a href={'https://www.twitter.com'} style={aStyle}>
            <FaTwitter size={'2rem'} color={'white'} />
        </a>
        <a href={'https://www.twitter.com'} style={aStyle}>
            <FaInstagramSquare size={'2rem'} color={'white'} />
        </a>
    </div >)
}

export default App;