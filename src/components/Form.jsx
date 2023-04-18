import React from 'react'
import { useState } from 'react'
import FormCss from './Form.module.css'

function Form() {
    const [style, setStyle] = useState(`${FormCss.valid}`);
    const [labelStyle, setLabelStyle] = useState(`${FormCss.validLabel}`);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleEmail(e) {
        setEmail(e.target.value);

    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleForm() {
        const regex = /^\D*\d{5}\D*$/;
        if ((email.trim() === '' || !email.includes('@')) || regex.test(password) === false) {
            setStyle(`${FormCss.inValid}`);
            setLabelStyle(`${FormCss.inValidLabel}`)
        }
    }
    return (
        <form action="#" className={FormCss.form}>
            {/* For Email */}
            <label htmlFor="email" className={labelStyle}>Your Email</label>
            <input type="email"
                id='email'
                placeholder='Enter your email'
                value={email}
                onChange={handleEmail}
                className={`${style} ${FormCss.inputField}`} />

            {/* For Password */}
            <label htmlFor="password" className={labelStyle}>Your password (5 digits)</label>
            <input type="password"
                id='password'
                placeholder='Enter your password'
                value={password}
                onChange={handlePassword}
                className={`${style} ${FormCss.inputField}`} />
            <button onClick={handleForm} type="submit" className={FormCss.btn}>Submit</button>
        </form>
    )
}

export default Form