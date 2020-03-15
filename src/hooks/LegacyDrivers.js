import React, { useEffect, useState } from 'react';
//import DetailsContainer from '../components/DriverView/RightDiv/DetailsContainer';
import ListContainer from '../components/DriverView/LeftDiv/ListContainer';
import useList from './useList';
import defaultState from '../data/defaultState';
import useFetch from './useFetch';
import countriesData from '../data/countriesData';

const LegacyDrivers = () => {
    //const { items, current, handleListClick } = useList(defaultState);
    
    const [requestUrl, setRequestUrl] = useState('https://ergast.com/api/f1/2019/drivers.json');
    const [flagUrls, setFlagUrls] = useState([]);
    
    const seasons = useFetch('https://ergast.com/api/f1/seasons.json?limit=80&offset=0', 'MRData.SeasonTable.Seasons');
    const drivers = useFetch(requestUrl, 'MRData.DriverTable.Drivers');

    const handleSelectChange = (e) => {
        setRequestUrl(`https://ergast.com/api/f1/${e.target.options[e.target.selectedIndex].text}/drivers.json`);
        console.log(e.target.options[e.target.selectedIndex].text);
        //setRequestUrl(`https://ergast.com/api/f1/${seasons.state[e.target.selectedIndex].season}/drivers.json`);
    }

    useEffect(() => {
        getFlagUrls();
        console.log('getFlagUrls called!')
        console.log(getFlagUrls())

        return () => setFlagUrls([]);
    }, [drivers.state])

    const getFlagUrls = () => {

        drivers.state.map((driver) => {

            try {
                const code = countriesData.filter((country) => {
                    return country.Nationality === driver.nationality;
                })[0].Code;
                console.log(code);
                const flagUrl = `https://www.countryflags.io/${code}/flat/32.png`;
                setFlagUrls((prev) => [...prev, flagUrl])
                return code;

            } catch (error) {
                console.log('countriesData.js data corrupt or flagAPI data unobtainable');
                setFlagUrls((prev) => [...prev, ''])

            }
        });
    }
    
    return (
        <div className='container'>
            <ListContainer items={drivers.state} seasons={seasons.state} type='legacy' handleSelectChange={handleSelectChange} flagUrls={flagUrls} />
        </div>
    )
}

export default LegacyDrivers;