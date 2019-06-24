import React from 'react';
import Radio from './Radio';

function Impression(props) {
    let RadioComponents = []
    for (let i = 0; i <=2; i++) { 
        RadioComponents.push(
            <Radio dispatch={props.dispatch} variant={props.textContent[i]} key={props.state[i].id} id={props.state[i].id} value={props.state[i].value} checked={props.state[i].chosen} />
        )
    }

    return(
        <div className="impression">
            <div className='heading-2'>{props.headingText}</div>
            {RadioComponents}
        </div>
    )
}

export default Impression;