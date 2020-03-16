import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className='navigation-ul'>
                <Link to='/f1-lineup'>
                    <li className='navigation-li'>Home</li>
                </Link>
                <Link to='/f1-lineup/drivers'>
                    <li className='navigation-li'>Drivers</li>
                </Link>
                <Link to='/f1-lineup/calendar'>
                    <li className='navigation-li'>Calendar</li>
                </Link>
                <Link to='/f1-lineup/legacy'>
                    <li className='navigation-li'>All Time Drivers</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation;