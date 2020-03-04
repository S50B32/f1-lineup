import React from 'react';

const DriverListItem = ({driver, index, handleListClick}) => {

    return (
        <li className={`li li-${driver.active.toString()}`} id={index} onClick={handleListClick} key={driver.no} >
            <div className='li-number__div' id={index}>{driver.no}</div>
            <img className='li-flag__img' id={index} alt='[flag]' src={driver.imgFlag}></img>
            <div className={`li-name__div li-name__div-${driver.teamShort.split(' ').join('').toLowerCase()}`} id={index}>{driver.name.toUpperCase()} {driver.surname.toUpperCase()}</div>
            <div className='li-team__div' id={index}>{driver.teamShort}</div>
            <img className='li-car__img' id={index} alt='[car_photo]'src={driver.carImg}></img>              
        </li>
    )

}

export default DriverListItem;