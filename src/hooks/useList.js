import {useState, useReducer} from 'react';
import { cloneDeep } from 'lodash';

const useList = (defaultState) => {

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
    
    const [items, dispatch] = useReducer(toggleListItemReducer, defaultState); 

    return {
        items,
        current,
        handleListClick: (e) => {
            setCurrent(e.target.id);
            dispatch({type: 'TOGGLE_ACTIVE'});       
        }
    }
}

export default useList;
