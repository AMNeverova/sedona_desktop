import React from 'react';
import Stripe from './Stripe';
import Heading4 from './Heading4';

function SightsHeading() {
    return(
        <div className='sights-heading'>
            <Stripe className='stripe for-sights'/>
            <Heading4 className='heading-4 sights' heading4Text='посещенные достопримечательности:'/>
            <Stripe className='stripe for-sights' />
        </div>
    )
}

export default SightsHeading;