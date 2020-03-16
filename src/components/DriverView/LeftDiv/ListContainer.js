import React from 'react';
import List from './List';

const ListContainer = ({items, handleListClick, type, handleSelectChange, seasons, flagUrls, isActive}) => {
    
    if (type === 'drivers') {
        return (
            <div className='div div-left'>
                <div className='div-title div-title__left'>
                    F1® 2020 SEASON DRIVER LINEUP
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
    } else if (type === 'legacy') {
        return (
            <div className='div div-left'>
                <div className='div-title div-title__left legacy__div'>
                    <h4 className='legacy__h4' >F1® ALL TIME DRIVERS LIST</h4>
                    <select className='select-css' onChange={handleSelectChange}>
                        {seasons.slice(0).reverse().map((season) => <option key={season.season}>{season.season}</option>)}
                    </select>
                </div>
                <List items={items} type={type} flagUrls={flagUrls} isActive={isActive} />
            </div>
        )
    } else return null;

}

export default ListContainer;