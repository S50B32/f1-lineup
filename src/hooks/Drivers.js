import React, { useEffect, useState } from 'react';
import DetailsContainer from '../components/DriverView/RightDiv/DetailsContainer';
import ListContainer from '../components/DriverView/LeftDiv/ListContainer';
import useList from './useList';
import defaultState from '../data/defaultState';

const Drivers = () => {
    const { items, current, handleListClick } = useList(defaultState);

    const [seasons, setSeasons] = useState([]);


    useEffect(() => {
        fetchSeasons();
    }, [])


    const fetchSeasons = async () =>{
        const data = await fetch('http://ergast.com/api/f1/seasons.json?limit=80&offset=0');

        const dataJson = await data.json();
        const seasonList= dataJson.MRData.SeasonTable.Seasons;

        setSeasons(seasonList);

    }
    


    return (
        <div className='container'>
            <ListContainer items={items} handleListClick={handleListClick} type='drivers' seasons={seasons} />
            <DetailsContainer items={items} current={current} type='drivers' />
        </div>
    )
}

export default Drivers;