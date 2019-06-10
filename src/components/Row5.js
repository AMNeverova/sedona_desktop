import React from 'react';
import ButtonSendReview from './ButtonSendReview';
import TextObligatory from './TextObligatory';

function Row5(props) {
    return(
        <div className='row-5'>
            <ButtonSendReview state={props.state} dispatch={props.dispatch} />
            <TextObligatory />
        </div>
    )
}


export default Row5