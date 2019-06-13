import React from 'react';
import { inputPhoneActionCreator } from '../redux/actionCreators';

function Phone(props) {

    let outlineGrey = {
    }

    let outlineRed = {
        outline: "#F08080 solid 0.3rem"
    }

    function handleChange(evt) {
        let newText = evt.target.value
        props.dispatch(inputPhoneActionCreator(newText))
    }

    return (
        <div className='phone'>
            <label>{!props.state.filled? <p className="error">{props.state.textForError}</p>: null}
                <span className="required">{props.state.labelText}</span>
                <input style={props.state.filled? outlineGrey: outlineRed } onChange={handleChange} type="tel" value={props.state.value} className="input-phone" placeholder={props.state.placeholder} id="phone-number" required={true} />
                <div className="phone-logo"></div>
            </label>
        </div>
    )
}

export default Phone;