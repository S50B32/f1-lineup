import React from 'react';

const LegacyListItem = ({item, index}) => {

    return (
        <li className={`li`} id={index} >
            <p>{`${item.givenName} ${item.familyName} // [${item.dateOfBirth}] // ${item.nationality}`}</p>
        </li>
    )
}

export default LegacyListItem;

//            <div className={`li-name__div`} id={index}>{item.givenName.toUpperCase()} {item.familyName.toUpperCase()}</div>            
