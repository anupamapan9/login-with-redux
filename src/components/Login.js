import React, { useState } from 'react';
import './Login.css'
const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <section className='login'>
            <form className='login__form'>
                <h1>Login Here</h1>
                <input type="name" placeholder='Name' name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' className='submit__btn'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Login;