import React from 'react';
import { inputEmailActionCreator } from '../redux/actionCreators';
import Input from './InputClass';

function Mail(props) {
    function handleChange(evt) {
        let newText = evt.target.value;
        props.dispatch(inputEmailActionCreator(newText))
    }
    let input = new Input()
    return (input.render(props, handleChange))
}

export default Mail;