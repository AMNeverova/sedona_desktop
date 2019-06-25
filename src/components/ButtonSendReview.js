import React from 'react';
import SedonaAPI from './SedonaAPI';
import { filledInputActionCreator, filledInputPhoneActionCreator, filledInputMailActionCreator } from '../redux/actionCreators';

function ButtonSendReview(props) {
    function handleClick(state) {
        state.inputFullname.map((item) => {
            if (item.id == 1 && !item.value && item.filled) {
                props.dispatch(filledInputActionCreator(item.id))
            }
            if (item.id == 2 && !item.value && item.filled) {
                props.dispatch(filledInputActionCreator(item.id))
            }
            if (item.value && !item.filled) {
                props.dispatch(filledInputActionCreator(item.id))
            }
        });

        if (!state.inputPhone.value && state.inputPhone.filled) {
            props.dispatch(filledInputPhoneActionCreator())
        }
        if (state.inputPhone.value && !state.inputPhone.filled) {
            props.dispatch(filledInputPhoneActionCreator())
        }
        if (!state.inputEmail.value && state.inputEmail.filled) {
            props.dispatch(filledInputMailActionCreator())
        }
        if (state.inputEmail.value && !state.inputEmail.filled) {
            props.dispatch(filledInputMailActionCreator())
        }

        let service = new SedonaAPI();
        service.submitForm(state)
    }
    return(
        <div className='button'>
            <button onClick={() => {handleClick(props.state)}} className='button-review'>{props.buttonText}</button>
        </div>
    )
}
export default ButtonSendReview;
