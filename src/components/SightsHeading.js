import React from 'react';
import Stripe from './Stripe';
import Heading4 from './Heading4';

function SightsHeading(props) {
    return(
        <div className='sights-heading'>
            <Stripe className='stripe for-sights'/>
            <Heading4 className='heading-4 sights' heading4Text={props.headingText} />
            <Stripe className='stripe for-sights' />
        </div>
    )
}

export default SightsHeading;