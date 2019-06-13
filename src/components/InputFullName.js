import React from 'react';
import { inputNameActionCreator, inputSurnameActionCreator, inputPatronymActionCreator } from '../redux/actionCreators';

function InputFullName(props) {

    let outlineGrey = {
    }

    let outlineRed = {
        outline: "#F08080 solid 0.3rem"
    }

    function handleChange(evt) {
        let newText = evt.target.value;
        if (props.id == 1) {
           props.dispatch(inputNameActionCreator(newText)) 
        }

        if (props.id == 2) {
            props.dispatch(inputSurnameActionCreator(newText))
        }

        if (props.id == 3) {
            props.dispatch(inputPatronymActionCreator(newText))
        }
    }

    return(
        <div className='text'>
        <label><span className={props.spanClassName}>{props.labelText}</span>
            <input type="text" style={props.filled? outlineGrey : outlineRed} value={props.value} onChange={handleChange} className={props.inputClassName} placeholder={props.placeholderText} required={props.inputRequired} />
        </label>
        </div>
    )
}

export default InputFullName;