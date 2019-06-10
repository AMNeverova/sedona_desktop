import React from 'react';
import { inputEmailActionCreator } from '../redux/actionCreators';

function Mail(props) {

    function handleChange(evt) {
        let newText = evt.target.value;
        props.dispatch(inputEmailActionCreator(newText))
    }

    return (
        <div className="mail">
        <label>
            <span className="required">Электронная почта</span>
            <input value={props.state.value} onChange={handleChange} type="email" className="input-email" placeholder="Введите e-mail" required="true" />
            <div className="mail-logo"></div>
        </label>
    </div>
    )
}

export default Mail;