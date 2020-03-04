import React from 'react';
import DriverListItem from './DriverListItem';

const DriverList = ({drivers, handleListClick}) => {

    return (
        <ul className='ul'>
            {drivers.map((driver, index) => 
                <DriverListItem driver={driver} index={index} handleListClick={handleListClick} />
            )}            
        </ul>
    )
}

export default DriverList;