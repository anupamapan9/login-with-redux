import React from 'react';
import './Logout.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const handelLogout = (e) => {

        dispatch(logout())
    }
    return (
        <section className='logout'>
            <h1>Welcome <span className='user__name'>{user.name}</span></h1>
            <h1>Your Email is <span className='user__name'>{user.email}</span></h1>
            <button className='logout__button' onClick={(e) => handelLogout(e)}>LogOut</button>
        </section>
    );
};

export default Logout;