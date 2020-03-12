import React from 'react';
import logo from '../logo.svg';
import Navigation from './Navigation';

const Header = () => {

    return (
        <header className="header">
            <div className='header__div'>
                <img src={logo} className="header__logo" alt="logo" />
                <h1 className='header__title'>REACT F1 Driver Line-up</h1>
                <Navigation />
                <p className='header__p--copyright'>Copyright © 2020 gupia_Pemek</p>
            </div>
        </header>
    )
}

export default Header;