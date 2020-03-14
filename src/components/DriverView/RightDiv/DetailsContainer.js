import React from 'react';
import DetailsImage from './DetailsImage';
import DetailsData from './DetailsData';


const DetailsContainer = ({items, current, type}) => {

    if (type === 'drivers') {
        return (
            <div className='div div-right'>
                    <div className='div-title div-title__right'>DRIVER DETAILS</div>
                        <DetailsImage items={items} current={current} type='drivers' />
                        <DetailsData items={items} current={current} type='drivers' />
            </div>
        )
    } else if (type === 'calendar') {
        return (
            <div className='div div-right div-right--calendar'>
                    <div className='div-title div-title__right div-right__title--calendar'>RACE DETAILS</div>
                        <DetailsImage items={items} current={current} type='calendar' />
                        <DetailsData items={items} current={current} type='calendar' />
            </div>
        )
    } else return null;
}

export default DetailsContainer;