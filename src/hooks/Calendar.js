import React from 'react';
import DetailsContainer from '../components/DriverView/RightDiv/DetailsContainer';
import ListContainer from '../components/DriverView/LeftDiv/ListContainer';
import useList from './useList';
import calendarState from '../data/calendarState';

const Calendar = () => {
    const { items, current, handleListClick } = useList(calendarState);

    return (
        <div className='container'>
            <ListContainer items={items} handleListClick={handleListClick} type='calendar' />
            <DetailsContainer items={items} current={current} type='calendar' />
        </div>
    )
}

export default Calendar;
//<DriverDetails items={items} current={current} />