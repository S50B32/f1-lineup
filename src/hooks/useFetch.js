import { useState, useEffect } from 'react';

const useFetch = (reqUrl, resPath) => {

    

    const [state, setState] = useState([]);     

    const fetchData = async (requestUrl, responsePath) =>{
        const data = await fetch(requestUrl);
        const dataJson = await data.json();

        //converting responsePath string ex. 'MRData.x.y' to ['MRData']['x']['y']
            const responseJson = responsePath.split('.').reduce((o,i)=>o[i], dataJson);
            console.log(responseJson);
        setState(responseJson);
    };

    useEffect(() => {
        fetchData(reqUrl, resPath);
        console.log('useFetch activated!');
        
    }, [reqUrl]);


    return { 
        state
    };
}

export default useFetch;