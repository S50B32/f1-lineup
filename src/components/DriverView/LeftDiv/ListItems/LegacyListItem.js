import React from 'react';

const LegacyListItem = ({item, index, flagUrls}) => {

    return (
        <li className='li legacy__li' id={index} >
            <div className='legacy__div--listItem' >
                <div className='legacy__div--number'>
                    <p className='legacy__p'>{item.permanentNumber}</p>
                </div>
                
                <p className='legacy__p'>{item.givenName.toUpperCase()} {item.familyName.toUpperCase()}</p>
                <p className='legacy__p'>[{item.dateOfBirth}]</p>
                <img className='legacy__img--flag' src={flagUrls[index]} alt='[flag]' ></img>
            </div>
        </li>
    )
}

export default LegacyListItem;

//            <div className={`li-name__div`} id={index}>{item.givenName.toUpperCase()} {item.familyName.toUpperCase()}</div>            
