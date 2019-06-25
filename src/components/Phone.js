import React from 'react';
import { inputPhoneActionCreator } from '../redux/actionCreators';
import Input from './InputClass';

function Phone(props) {
    function handleChange(evt) {
        let newText = evt.target.value
        props.dispatch(inputPhoneActionCreator(newText))
    }
    return (
        <Input state={props} handleChange={handleChange} />
    )
}
export default Phone;
