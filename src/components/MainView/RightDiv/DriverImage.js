import React from 'react';

const DriverImage = ({drivers, current}) => {

    return(
        <div className='div-right__photo'>
            <img className='div-right__photo-manufacturerLogo' alt='[manufacturer_logo]' src={drivers[current].manufacturerLogo}></img> 
            <img className='div-right__photo-number' alt='[driver_number]'src={drivers[current].imgNum}></img>
            <img className='div-right__photo-img' alt='[driver_photo]' src={drivers[current].img}></img> 
        </div>
    )
}

export default DriverImage;