import React from 'react';

const CalendarListItem = ({item, index, handleListClick}) => {

    return (
        <li className={`li li-calendar li-calendar__${item.active.toString()}`} id={index} onClick={handleListClick} >
            
            <img className='li-calendar__trackImg' id={index} alt='[track_map]' src={item.imgTrack}></img>
            <img className='li-calendar__flagImg' id={index} alt='[flag]' src={item.imgFlag}></img>

            <h2 className='p-calendar' id={index}>{item.country.toUpperCase()}</h2>            
        </li>
    )
}

export default CalendarListItem;