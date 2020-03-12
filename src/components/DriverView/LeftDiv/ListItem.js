import React from 'react';
import DriverListItem from './ListItems/DriverListItem';
import CalendarListItem from './ListItems/CalendarListItem';

const ListItem = ({item, index, handleListClick, type}) => {

    if (type === 'drivers') return (<DriverListItem item={item} index={index} handleListClick={handleListClick} />)
    else if (type === 'calendar') return (<CalendarListItem item={item} index={index} handleListClick={handleListClick} />)
}

export default ListItem;