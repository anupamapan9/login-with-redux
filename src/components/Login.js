import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import './Login.css'
const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handelSubmit = e => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }))

    }
    return (
        <section className='login'>
            <form className='login__form' onSubmit={handelSubmit}>
                <h1>Login Here</h1>
                <input type="name" placeholder='Name' name="" id="" value={name} required onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' name="" id="" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' required name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' className='submit__btn'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Login;