import React from 'react';
import Radio from './Radio';

function Impression(props) {
    let radioComponents = []
    for (let i = 0; i < props.state.length; i++) { 
        radioComponents.push(
            <Radio dispatch={props.dispatch} variant={props.textContent[i]} key={props.state[i].id} id={props.state[i].id} value={props.state[i].value} checked={props.state[i].chosen} />
        )
    }
    return(
        <div className='impression'>
            <div className='heading-2'>{props.headingText}</div>
            {radioComponents}
        </div>
    )
}
export default Impression;
