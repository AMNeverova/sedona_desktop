import React from 'react';
import Stripe from './Stripe';
import Heading4 from './Heading4';

function SightsHeading(props) {
    return(
        <div className='sights-heading'>
            <Stripe className='stripe for-sights'/>
            <Heading4 className='heading-4 sights' textContent={props.textContent} />
            <Stripe className='stripe for-sights' />
        </div>
    )
}

export default SightsHeading;