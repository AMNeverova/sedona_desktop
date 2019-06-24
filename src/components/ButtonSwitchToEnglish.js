import React from 'react';
import { textContentAC } from '../redux/actionCreators';

function ButtonSwitchToEnglish(props) {
    let handleClick = () => {
        props.dispatch(textContentAC())
    }
        return(
        <div className='button-switch-language'>
            <button onClick={handleClick}>{props.textContent}</button>
        </div>)
}

export default ButtonSwitchToEnglish;