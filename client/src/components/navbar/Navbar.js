import React from 'react';
import Img from '../../assets/images/userAvatar.jpg';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='mainNavbar'>
            {/* Project Name */}
            <h1 className='mainHeader'>Nagwa JS Test</h1>
            <p>
                Welcome , <img src={Img} alt='User Img' className='userImg'/>
            </p>
        </div>
    );
};

export default Navbar;