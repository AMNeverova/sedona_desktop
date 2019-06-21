import React from 'react';
import ButtonSendReview from './ButtonSendReview';
import TextObligatory from './TextObligatory';

function Row5(props) {
    return(
        <div className='row-5'>
            <ButtonSendReview buttonText={props.textContent.buttonSendReview} state={props.state} dispatch={props.dispatch} />
            <TextObligatory text={props.textContent.obligatoryText} />
        </div>
    )
}

export default Row5