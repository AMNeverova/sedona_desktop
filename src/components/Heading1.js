import React from 'react';

function Heading1(props) {
    return (
        <div className='heading-1'>
            <p className='main'>{props.headingTexts.main}</p>
            <p className='secondary'>{props.headingTexts.secondary1}</p>
            <p className='secondary'>{props.headingTexts.secondary2}</p>
        </div>
    )
}

export default Heading1;