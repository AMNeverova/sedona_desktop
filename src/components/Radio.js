import React from 'react';
import { radioChangeActionCreator } from '../redux/actionCreators';

function Radio(props) {

    let handleChange = (id) => {
        props.dispatch(radioChangeActionCreator(id))
    }

    return (
        <div className='radio'>
            <label onChange={() => {handleChange(props.id)}}>
            <input className="input-radio" type="radio" name="impression"  value={props.value} checked={props.checked} />
            <div className="radio-button">
                <div className="radio-label-text">{props.variant}</div>
            </div>
            </label>
        </div>
    )
}

export default Radio;