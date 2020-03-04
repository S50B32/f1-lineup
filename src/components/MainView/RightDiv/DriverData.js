import React from 'react';

const DriverData = ({drivers, current}) => {

    return (
        <div className={`div-right__data div-right__data-${drivers[current].teamShort.split(' ').join('').toLowerCase()}`}>
            <img className='div-right__data-flag' alt='[driver_country_flag]' src={drivers[current].imgFlag}></img> 
            <h2 className={`h2-name h2-name-${drivers[current].teamShort.split(' ').join('').toLowerCase()}`}>
                {drivers[current].name.toUpperCase()}
                </h2>
            <h1 className='h1-name'>
                {drivers[current].surname.toUpperCase()}
                </h1>
            <p className='p-team'>{drivers[current].team}</p>
        </div>
    )
}

export default DriverData;