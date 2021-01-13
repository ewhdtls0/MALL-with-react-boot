import React from 'react';

const SearchBoxOptions = {
    float: 'left',
    display: 'flex',
    width: '87%',
    height: '30px',
    borderRadius: '25px',
    borderRight: '1px solid black',
    border: 'none',
    marginLeft: '8px',
    marginRight: '10px',
    outline: 'none',
}


const SearchBox = (props) => {
    return(
        <input style={SearchBoxOptions} type='search' className='search' placeholder={props.placeholder}/>
    )
}

export default SearchBox;