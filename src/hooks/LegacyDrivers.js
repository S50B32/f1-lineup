import React, { useEffect, useState } from 'react';
//import DetailsContainer from '../components/DriverView/RightDiv/DetailsContainer';
import ListContainer from '../components/DriverView/LeftDiv/ListContainer';
import useList from './useList';
import defaultState from '../data/defaultState';
import useFetch from './useFetch';

const LegacyDrivers = () => {
    //const { items, current, handleListClick } = useList(defaultState);
    
    const [requestUrl, setRequestUrl] = useState('https://ergast.com/api/f1/2019/drivers.json');

    const seasons = useFetch('https://ergast.com/api/f1/seasons.json?limit=80&offset=0', 'MRData.SeasonTable.Seasons');
    const drivers = useFetch(requestUrl, 'MRData.DriverTable.Drivers');

    const handleSelectChange = (e) => {
        setRequestUrl(`https://ergast.com/api/f1/${seasons.state[e.target.selectedIndex].season}/drivers.json`);
    }
    
    return (
        <div className='container'>
            <ListContainer items={drivers.state} seasons={seasons.state} type='legacy' handleSelectChange={handleSelectChange} />
        </div>
    )
}

export default LegacyDrivers;