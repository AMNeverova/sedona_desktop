import React from 'react';
import Service from './Service';
import { filledInputActionCreator, filledInputPhoneActionCreator, filledInputMailActionCreator } from '../redux/actionCreators';

function ButtonSendReview(props) {
    function handleClick(state) {

        let radiobuttonValue = state.chooseImpressionRadiobutton.map((item) => {
            return (
            item.chosen ? item.value : null
            )
        });

        let checkboxValues = state.chooseSightsCheckbox.map((item) => {
            return (
            item.checked ? item.checkboxValue : null
            )
        });

        let fullnameValues = state.inputFullname.map((item) => {
            if (item.id == 1 && !item.value && item.filled) {
                props.dispatch(filledInputActionCreator(item.id))
            }
            if (item.id == 2 && !item.value && item.filled) {
                props.dispatch(filledInputActionCreator(item.id)) 
            }

            if (item.value && !item.filled) {
                props.dispatch(filledInputActionCreator(item.id))
            }

            return (
            item.value ? item.value : null
            )
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

        let filledForm = {
            "impression": radiobuttonValue,
            "visitedSights": checkboxValues,
            "fullname": fullnameValues,
            "phoneNumber": state.inputPhone.value,
            "email": state.inputEmail.value,
            "emotions": state.describeEmotions.value
        }
        require('es6-promise').polyfill();
        let service = new Service

        if (filledForm.fullname[0] && filledForm.fullname[1] && filledForm.phoneNumber && filledForm.email) {
            service.axios(filledForm)
        }
        
    }

    return(
        <div className="button">
            <button onClick={() => {handleClick(props.state)}} className="button-review">{props.buttonText}</button>
        </div>
    )
}

export default ButtonSendReview;