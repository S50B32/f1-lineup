import React, { useEffect, useState } from 'react';
//import DetailsContainer from '../components/DriverView/RightDiv/DetailsContainer';
import ListContainer from '../components/DriverView/LeftDiv/ListContainer';
import useFetch from './useFetch';
import countriesData from '../data/countriesData';

const LegacyDrivers = () => {
    
    const [requestUrl, setRequestUrl] =useState('https://ergast.com/api/f1/2019/drivers.json');
    const [flagUrls, setFlagUrls] = useState([]);
    
    const seasons = useFetch();
    const drivers = useFetch();

    useEffect(() => {
        seasons.fetchData(
            'https://ergast.com/api/f1/seasons.json?limit=80&offset=0',
            'MRData.SeasonTable.Seasons');
    }, [])

    useEffect(() => {
        drivers.fetchData(requestUrl, 'MRData.DriverTable.Drivers');
            return () => drivers.setState([]);
    }, [requestUrl])

    useEffect(() => {
        getFlagUrls();
            return () => setFlagUrls([]);
    }, [drivers.state])

    const handleSelectChange = (e) => {
        drivers.setIsLoading(true);
        console.log('isLoading before fetch:', drivers.isLoading);
            setRequestUrl(`https://ergast.com/api/f1/${e.target.options[e.target.selectedIndex].text}/drivers.json`);
    }

    const getFlagUrls = () => {

        drivers.state.map((driver) => {
            try {
                const code = countriesData.filter((country) => country.Nationality === driver.nationality )[0].Code;
                const flagUrl = `https://www.countryflags.io/${code}/flat/32.png`;
                    setFlagUrls((prev) => [...prev, flagUrl])

            } catch (error) {
                console.log('countriesData.js data corrupt or flagAPI data unobtainable');
                    setFlagUrls((prev) => [...prev, ''])
            }
        });
    }
    
    return (
        <div className='container'>
            <ListContainer items={drivers.state}
                          seasons={seasons.state}
                          type='legacy'
                          handleSelectChange={handleSelectChange}
                          flagUrls={flagUrls}
                          isActive={drivers.isLoading} />
        </div>
    )
}

export default LegacyDrivers;