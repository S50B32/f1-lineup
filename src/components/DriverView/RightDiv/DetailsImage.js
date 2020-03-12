import React from 'react';

const DetailsImage = ({items, current, type}) => {
    if (type === 'drivers') {
        return(
            <div className='div-right__photo'>
                <img className='div-right__photo-manufacturerLogo' alt='[manufacturer_logo]' src={items[current].manufacturerLogo}></img> 
                <img className='div-right__photo-number' alt='[driver_number]'src={items[current].imgNum}></img>
                <img className='div-right__photo-img' alt='[driver_photo]' src={items[current].img}></img> 
            </div>
        )
    } else if (type === 'calendar') {
        return(
            <div className='div-right__photo div-right__photo--calendar'>
                 <p className={`details__p--date details__p--date-${items[current].month}`}>{items[current].date}</p>
                <img className='div-right__photo-number' alt='[driver_number]'src={items[current].imgTrack}></img>
                <img className='div-right__photo-img--track' alt='[driver_photo]' src={items[current].img}></img> 
            </div>
        )
    }
    
}

export default DetailsImage;

//<img className='div-right__photo-manufacturerLogo' alt='[manufacturer_logo]' src={items[current].imgTrack}></img>