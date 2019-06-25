import React from 'react';
import InputFullName from './InputFullName';

function Present(props) {
    let inputFullnameComponents = []
    for (let i = 0; i <= 2; i++) {
        inputFullnameComponents.push(
            <InputFullName  dispatch={props.dispatch} 
                state={props.state[i]} key={props.state[i].id}
                textContent={props.textContent[i]}  
                />
        )
    }
    return (
        <div className='present'>
            <div className='heading-3'>{props.headingText}</div>
                {inputFullnameComponents}
        </div>
    )
}
export default Present;
