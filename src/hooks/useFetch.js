import { useState, useEffect } from 'react';

const useFetch = (request) => {

    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        fetchSeasons();
    }, [])


    const fetchSeasons = async () =>{
        const data = await fetch(request);

        const dataJson = await data.json();
        const seasonList= dataJson.MRData.SeasonTable.Seasons;

        setSeasons(seasonList);

    }

    return { seasons };
}

export default useFetch;