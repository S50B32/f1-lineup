import React, {useState, useReducer} from 'react';
import defaultState from '../data/defaultState';
import { cloneDeep } from 'lodash';
import DriverDetails from '../components/DriverView/RightDiv/DriverDetails';
import DriverLineup from '../components/DriverView/LeftDiv/DriverLineup';



const DriverContainer = () => {

    const [current, setCurrent] = useState(0);
    
    const toggleListItemReducer = (_state, action) => {
        switch (action.type) {
            case 'RESET_LIST':
                return defaultState;
            case 'TOGGLE_ACTIVE':
                    let tempState = cloneDeep(defaultState);
                    tempState[current].active = true;
                return [...tempState];
            default:
                return defaultState;
        }
    }
    
    const [drivers, dispatch] = useReducer(toggleListItemReducer, defaultState);
    
    const handleListClick = (e) => {
        setCurrent(e.target.id);
        dispatch({type: 'TOGGLE_ACTIVE'});       
    }

    return (
            <div className='container'>
                <DriverLineup drivers={drivers} handleListClick={handleListClick} />
                <DriverDetails drivers={drivers} current={current} />
            </div>
    )
}

export default DriverContainer;
