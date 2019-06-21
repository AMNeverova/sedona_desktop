import React from 'react';
import { inputPhoneActionCreator } from '../redux/actionCreators';

function Phone(props) {

    function handleChange(evt) {
        let newText = evt.target.value
        props.dispatch(inputPhoneActionCreator(newText))
    }

    return (
        <div className='phone'>
            <label>{!props.state.filled? <p className="error">{props.textContent.textForError}</p>: null}
                <span className="required">{props.textContent.labelText}</span>
                <input onChange={handleChange} type="tel" value={props.state.value} className={props.state.className} placeholder={props.textContent.placeholder} id="phone-number" required={true} />
                <div className="phone-logo"></div>
            </label>
        </div>
    )
}

export default Phone;