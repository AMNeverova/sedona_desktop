import React from 'react';
import Radio from './Radio';

function Impression(props) {
    
    let RadioComponents = props.state.map(function(item) { 
        return(
            <Radio dispatch={props.dispatch} variant={item.labelText} key={item.id} id={item.id} value={item.value} checked={item.chosen} />
        )
    })

    return(
        <div className="impression">
            <div className='heading-2'>{props.headingText}</div>
            {RadioComponents}
        </div>
    )
}

export default Impression;