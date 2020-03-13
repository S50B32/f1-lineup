import React from 'react';
import DetailsContainer from '../components/DriverView/RightDiv/DetailsContainer';
import ListContainer from '../components/DriverView/LeftDiv/ListContainer';
import useList from './useList';
import defaultState from '../data/defaultState';
import useFetch from './useFetch';

const Drivers = () => {
    const { items, current, handleListClick } = useList(defaultState);
    const { seasons } = useFetch('http://ergast.com/api/f1/seasons.json?limit=80&offset=0');

    return (
        <div className='container'>
            <ListContainer items={items} handleListClick={handleListClick} type='drivers' seasons={seasons} />
            <DetailsContainer items={items} current={current} type='drivers' />
        </div>
    )
}

export default Drivers;