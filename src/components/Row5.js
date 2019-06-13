import React from 'react';
import ButtonSendReview from './ButtonSendReview';
import TextObligatory from './TextObligatory';

function Row5(props) {
    return(
        <div className='row-5'>
            <ButtonSendReview buttonText={props.buttonText} state={props.state} dispatch={props.dispatch} />
            <TextObligatory text={props.textObligatory} />
        </div>
    )
}

export default Row5