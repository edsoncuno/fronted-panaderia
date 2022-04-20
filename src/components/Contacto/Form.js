import './Form.css'
import { useState } from 'react'

const App = () => {

    const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

    const appStyle = {
        'background': 'white',
        'gridColumn': '2/3',
        'gridRow': '4/6',
        'border': '6px double grey',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'space-evenly'
    }

    const focus = (e) => {
        e.target.parentElement.children[1].className = 'labelStyleActive';
    }

    const blur = (e) => {
        if (e.target.value === '') {
            e.target.parentElement.children[1].className = 'labelStyle';
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const validar = () => {
        alert(`nombre: ${form.nombre} - email: ${form.email} - mensaje: ${form.mensaje}`);
    }

    return (<div style={appStyle}>
        <div className='inputGroup'>
            <input className='inputStyle' type='text' id='nombre' name='nombre' onFocus={focus} onBlur={blur} onChange={handleChange} />
            <label className='labelStyle' htmlFor='nombre' >Nombre</label>
            <label className='error'>{form.nombre !== '' ? '' : 'Por favor, llevar el campo con tu nombre'}</label>
        </div>
        <div className='inputGroup'>
            <input className='inputStyle' type='email' id='email' name='email' onFocus={focus} onBlur={blur} onChange={handleChange} />
            <label className='labelStyle' htmlFor='email' >Email</label>
            <label className='error'>{form.email !== '' ? '' : 'Por favor, llevar el campo con tu email'}</label>
        </div>
        <div className='inputGroup'>
            <textarea className='inputStyle' id='mensaje' name='mensaje' onFocus={focus} onBlur={blur} onChange={handleChange}></textarea>
            <label className='labelStyle' htmlFor='mensaje' >Mensaje</label>
            <label className='error'>{form.mensaje !== '' ? '' : 'Por favor, llevar el campo con tu mensaje'}</label>
        </div>
        <div className='buttonGroup'>
            <button className='buttonStyle' onClick={validar}>Enviar</button>
        </div>
    </div>);
}

export default App;