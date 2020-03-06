import React from 'react';
import DriverList from './DriverList';

const DriverLineup = ({drivers, handleListClick}) => {
    
    return (
        <div className='div div-left'>
            <div className='div-title div-title__left'>F1® 2020 SEASON DRIVER LINEUP</div>
            <DriverList drivers={drivers} handleListClick={handleListClick} />
        </div>
    )
}

export default DriverLineup;