import React from 'react';
import DriverListItem from './ListItems/DriverListItem';
import CalendarListItem from './ListItems/CalendarListItem';
import LegacyListItem from './ListItems/LegacyListItem';

const ListItem = ({item, index, handleListClick, type}) => {

    if (type === 'drivers') return (<DriverListItem item={item} index={index} handleListClick={handleListClick} />)
    else if (type === 'calendar') return (<CalendarListItem item={item} index={index} handleListClick={handleListClick} />)
    else if (type === 'legacy') return (<LegacyListItem item={item} index={index} />)
    else return null;
}

export default ListItem;