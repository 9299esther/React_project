import React from 'react';
import { Link } from 'react-router-dom';
import image from './assets/logo.png'


 function Header(){
   return <header>
        <Link to='/' >
        <img src={image} alt="logo" className='logo'/>
       <hr/>
        </Link>
    </header>
}

export default Header