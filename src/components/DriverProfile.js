import React, {useState, useReducer} from 'react';
import defaultState from '../data/defaultState';
import { cloneDeep } from 'lodash';



const DriverProfile = () => {

    const [current, setCurrent] = useState(0);
    
    const toggleListItemReducer = (_state, action) => {
        switch (action.type) {
            case 'RESET_LIST':
                return defaultState;
            case 'TOGGLE_ACTIVE':
                    let tempState = cloneDeep(defaultState);
                    tempState[current].active = true;
                return [...tempState];
        }
    }
    
    const [drivers, dispatch] = useReducer(toggleListItemReducer, defaultState);
    
    const handleListClick = (e) => {
        setCurrent(e.target.id);
        dispatch({type: 'TOGGLE_ACTIVE'});       
    }

    return (
        <>
        <div className='container'>
            <div className='div div-left'>
            <div className='div-title div-title__left'>F1® 2020 SEASON DRIVER LINEUP</div>
                <ul className='ul'>
                    
                    {drivers.map((driver, index) => 
                        <li className={`li li-${driver.active.toString()}`} id={index} onClick={handleListClick} key={driver.no} >
                            <div className='li-number__div' id={index}>{driver.no}</div>
                            <img className='li-flag__img' id={index} alt='[flag]' src={driver.imgFlag}></img>
                            <div className={`li-name__div li-name__div-${driver.teamShort.split(' ').join('').toLowerCase()}`} id={index}>{driver.name.toUpperCase()} {driver.surname.toUpperCase()}</div>
                            <div className='li-team__div' id={index}>{driver.teamShort}</div>
                            <img className='li-car__img' id={index} alt='[car_photo]'src={driver.carImg}></img> 
                        </li>
                    )}
                </ul>

            </div>



            <div className='div div-right'>
                <div className='div-title div-title__right'>DRIVER DETAILS</div>
                <div className='div-right__photo'>
                    <img className='div-right__photo-manufacturerLogo' alt='[manufacturer_logo]' src={drivers[current].manufacturerLogo}></img> 
                    <img className='div-right__photo-number' alt='[driver_number]'src={drivers[current].imgNum}></img>
                    <img className='div-right__photo-img' alt='[driver_photo]' src={drivers[current].img}></img> 
                </div>
                <div className={`div-right__data div-right__data-${drivers[current].teamShort.split(' ').join('').toLowerCase()}`}>
                    <img className='div-right__data-flag' alt='[driver_country_flag]' src={drivers[current].imgFlag}></img> 
                    <h2 className={`h2-name h2-name-${drivers[current].teamShort.split(' ').join('').toLowerCase()}`}>
                        {drivers[current].name.toUpperCase()}
                    </h2>
                    <h1 className='h1-name'>
                        {drivers[current].surname.toUpperCase()}
                    </h1>
                    <p className='p-team'>{drivers[current].team}</p>
                </div>

            </div>
        </div>
        </>
    )

}

export default DriverProfile;