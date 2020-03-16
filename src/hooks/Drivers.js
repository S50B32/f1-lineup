import React from 'react';
import DetailsContainer from '../components/DriverView/RightDiv/DetailsContainer';
import ListContainer from '../components/DriverView/LeftDiv/ListContainer';
import useList from './useList';
import defaultState from '../data/defaultState';

const Drivers = () => {
    const { items, current, handleListClick } = useList(defaultState);

    return (
        <div className='container'>
            <ListContainer items={items} handleListClick={handleListClick} type='drivers' />
            <DetailsContainer items={items} current={current} type='drivers' />
        </div>
    )
}

export default Drivers;