import React from 'react';
import InputFullName from './InputFullName';

function Present(props) {
    let InputFullnameComponents = props.inputFullname.map((item) => {
        return (
        <InputFullName filled={item.filled} dispatch={props.dispatch} id={item.id}
            inputClassName={item.className} 
            placeholderText={item.placeholder} key={item.id} 
            labelText={item.labelText} spanClassName={item.spanClassName} 
            inputRequired={item.required} value={item.value} />
        )
    })

    return (
        <div className='present'>
            <div className='heading-3'>представьтесь:</div>
                {InputFullnameComponents}
            </div>
    )
}


export default Present;