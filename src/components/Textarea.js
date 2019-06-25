import React from 'react';
import { textareaActionCreator } from '../redux/actionCreators';

function Textarea(props) {
    function handleChange(evt) {
        let newText = evt.target.value;
        props.dispatch(textareaActionCreator(newText))
    }
    return (
    <div className='textarea'>
        <textarea rows='5' onChange={handleChange} value={props.state.value} className='text-describe' placeholder={props.textContent}
            name='emotions' />
    </div>
    )
}
export default Textarea;
