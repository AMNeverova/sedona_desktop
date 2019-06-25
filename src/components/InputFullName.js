import React from 'react';
import { inputNameActionCreator, inputSurnameActionCreator, inputPatronymActionCreator } from '../redux/actionCreators';
import Input from './InputClass';

function InputFullName(props) {
    function handleChange(evt) {
        let newText = evt.target.value;

        if (props.state.id == 1) {
           props.dispatch(inputNameActionCreator(newText)) 
        }
        if (props.state.id == 2) {
            props.dispatch(inputSurnameActionCreator(newText))
        }
        if (props.state.id == 3) {
            props.dispatch(inputPatronymActionCreator(newText))
        }
    }
    return (
        <Input state={props} handleChange={handleChange} />
    )
}
export default InputFullName;
