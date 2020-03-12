import React from 'react';

const DetailsData = ({items, current, type}) => {
    if (type === 'drivers') {
        return (
            <div className={`div-right__data div-right__data-${items[current].teamShort.split(' ').join('').toLowerCase()}`}>
                <img className='div-right__data-flag' alt='[driver_country_flag]' src={items[current].imgFlag}></img> 
                <h2 className={`h2-name h2-name-${items[current].teamShort.split(' ').join('').toLowerCase()}`}>
                    {items[current].name.toUpperCase()}
                    </h2>
                <h1 className='h1-name'>
                    {items[current].surname.toUpperCase()}
                    </h1>
                <p className='p-team'>{items[current].team}</p>
            </div>
        )
    } else if (type === 'calendar') {
        return (
            <div className='div-right__data'>
                <img className='div-right__data-flag' alt='[driver_country_flag]' src={items[current].imgFlag}></img> 
                <h2 className='h2-name h2-name__track'>
                    {items[current].track}
                    </h2>
                <h1 className='h1-name'>
                    {items[current].country.toUpperCase()}
                    </h1>
                <p className='p-team'>{items[current].city}</p>
            </div>
        )
    }
    
}

export default DetailsData;