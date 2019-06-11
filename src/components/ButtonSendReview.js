import React from 'react';
import axios from 'axios';
import { buttonSendActionCreator } from '../redux/actionCreators';

function ButtonSendReview(props) {

    function handleClick(state) {

        let radiobuttonValue = state.radiobutton.map((item) => {
            return (
            item.chosen ? item.value : null
            )
        });

        let checkboxValues = state.checkbox.map((item) => {
            return (
            item.checked ? item.checkboxValue : null
            )
        });

        let fullnameValues = state.inputFullname.map((item) => {
            return (
            item.value ? item.value : null
            )
        });

        let filledForm = {
            "impression": radiobuttonValue,
            "visitedSights": checkboxValues,
            "fullname": fullnameValues,
            "phoneNumber": state.inputPhone.value,
            "email": state.inputEmail.value,
            "emotions": state.describeEmotions.value
        }
        require('es6-promise').polyfill();
        axios({
                method: 'post',
                url: '',
                data: filledForm
            })
            .then((res) => {
                console.log(res)
            })

            .catch((error) => {
                console.log(error);
            });

            props.dispatch(buttonSendActionCreator(props.state))
    }

    return(
        <div className="button">
            <button onClick={() => {handleClick(props.state)}} className="button-review">Отправить отзыв</button>
        </div>
    )
}

export default ButtonSendReview;