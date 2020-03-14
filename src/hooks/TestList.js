import React, {useState, useEffect} from 'react';
import useFetch from './useFetch';

const TestList = () => {
    //const drivers = useFetch('http://ergast.com/api/f1/2019/drivers.json', 'MRData.DriverTable.Drivers.0');
    

    const [state, setState] = useState([]);

    useEffect(() => {
        fetchData('https://ergast.com/api/f1/2019/drivers.json', 'MRData.DriverTable.Drivers');
        console.log(state);
    }, [])


    const fetchData = async (requestUrl, responsePath) =>{

        const data = await fetch(requestUrl);
        const dataJson = await data.json();
        
        //converting responsePath string ex. 'MRData.x.y' to ['MRData']['x']['y']
            const responseJson = responsePath.split('.').reduce((o,i)=>o[i], dataJson);
        
            console.log(responseJson);
        setState(responseJson);
    }

    

    return (
        <div className='container'>
           <ul>
               {state.map((driver) => <li key={driver.driverId}>{driver.familyName}</li>)}
           </ul>
        </div>
    )
}

export default TestList;