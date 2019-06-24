import React from 'react';
import { CheckboxChangeActionCreator } from '../redux/actionCreators';

function Checkbox(props) {
    function handleChange(id) {
        props.dispatch(CheckboxChangeActionCreator(id))
    }

    return (
        <div className='checkbox'>
            <label onChange={() => {handleChange(props.id)}}>
                <input className="input-checkbox" type="checkbox" value={props.checkboxValue} checked={props.checkboxChecked} />
                <div className="checkbox-button">
                    <div className="checkbox-label-text">{props.checkboxText}</div>
                </div>
            </label>
        </div>
    )
}

export default Checkbox;