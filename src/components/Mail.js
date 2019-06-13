import React from 'react';
import { inputEmailActionCreator } from '../redux/actionCreators';

function Mail(props) {

    let outlineGrey = {
    }

    let outlineRed = {
        outline: "#F08080 solid 0.3rem"
    }

    function handleChange(evt) {
        let newText = evt.target.value;
        props.dispatch(inputEmailActionCreator(newText))
    }

    return (
        <div className="mail">
        <label>
            <span className="required">{props.state.labelText}</span>
            <input style={props.state.filled? outlineGrey: outlineRed} value={props.state.value} onChange={handleChange} type="email" className="input-email" placeholder={props.state.placeholder} required={true} />
            <div className="mail-logo"></div>
        </label>
    </div>
    )
}

export default Mail;