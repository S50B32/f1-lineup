import React from 'react';
import DriverImage from './DriverImage';
import DriverData from './DriverData';


const DriverDetails = ({drivers, current}) => {

    return (
        <div className='div div-right'>
                <div className='div-title div-title__right'>DRIVER DETAILS</div>
                    <DriverImage drivers={drivers} current={current} />
                    <DriverData drivers={drivers} current={current} />

        </div>
    )

}

export default DriverDetails;