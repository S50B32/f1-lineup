import React from 'react';
import List from './List';

const ListContainer = ({items, handleListClick, type, seasons}) => {
    
    if (type === 'drivers') {
        return (
            <div className='div div-left'>
                <div className='div-title div-title__left'>
                    F1® 2020 SEASON DRIVER LINEUP
                    <select>
                        {seasons.map((item) => <option>{item.season}</option>)}
                    </select>
                </div>
                <List items={items} handleListClick={handleListClick} type={type} />
            </div>
        )
    } else if (type === 'calendar') {
        return (
            <div className='div div-left'>
                <div className='div-title div-title__left'>F1® 2020 RACE SCHEDULE</div>
                <List items={items} handleListClick={handleListClick} type={type} />
            </div>
        )
    }
}

export default ListContainer;