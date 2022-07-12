import React from 'react';

const Logout = () => {
    return (
        <section>
            <h1>Welcome <span className='user__name'>Name</span></h1>
            <button className='logout_btn'>LogOut</button>
        </section>
    );
};

export default Logout;