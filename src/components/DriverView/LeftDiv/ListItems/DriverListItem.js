import React from 'react';

const DriverListItem = ({item, index, handleListClick}) => {

    return (
        <li className={`li li-${item.active.toString()}`} id={index} onClick={handleListClick} >
            <div className='li-number__div' id={index}>{item.no}</div>
            <img className='li-flag__img' id={index} alt='[flag]' src={`https://www.countryflags.io/${item.country}/flat/64.png`}></img>
            <div className={`li-name__div li-name__div-${item.teamShort.split(' ').join('').toLowerCase()}`} id={index}>{item.name.toUpperCase()} {item.surname.toUpperCase()}</div>
            <div className='li-team__div' id={index}>{item.teamShort}</div>
            <img className='li-car__img' id={index} alt='[car_photo]'src={item.carImg}></img>              
        </li>
    )
}

export default DriverListItem;
//flagFromState
// <img className='li-flag__img' id={index} alt='[flag]' src={item.imgFlag}></img>
