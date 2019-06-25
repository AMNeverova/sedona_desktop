import React from 'react';

function Heading1(props) {
    return(
        <div className='heading-1'>
            <p className='main'>{props.textContent.main}</p>
            <p className='secondary'>{props.textContent.secondary1}</p>
            <p className='secondary'>{props.textContent.secondary2}</p>
        </div>
    )
}
export default Heading1;
