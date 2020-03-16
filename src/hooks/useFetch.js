import { useState } from 'react';

const useFetch = () => {

    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (requestUrl, responsePath) =>{
    
        await fetch(requestUrl).then((response) => {
            console.log('useFetch activated!');
            return response.json();
            
        }).then((data) => {
            //deactivatesSpinner();
            
            const responseJson = responsePath.split('.').reduce((o,i)=>o[i], data);
            setIsLoading(false);
            setState(responseJson);
                console.log('isLoading after fetch:', isLoading);
        });
    };

    return { 
        state,
        setState,
        fetchData,
        isLoading,
        setIsLoading
    };
}

export default useFetch;