import React from 'react';
import InputFullName from './InputFullName';

function Present(props) {
    let InputFullnameComponents = []
    
    for (let i = 0; i <= 2; i++) {
        InputFullnameComponents.push(
        <InputFullName filled={props.state[i].filled} dispatch={props.dispatch} id={props.state[i].id}
            inputClassName={props.state[i].className} 
            placeholderText={props.textContent[i].placeholder} key={props.state[i].id} 
            labelText={props.textContent[i].labelText} spanClassName={props.state[i].spanClassName} 
            inputRequired={props.state[i].required} value={props.state[i].value} />
        )
    }

    return (
        <div className='present'>
            <div className='heading-3'>{props.headingText}</div>
                {InputFullnameComponents}
            </div>
    )
}


export default Present;