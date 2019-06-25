import React from 'react';
import Checkbox from'./Checkbox'

function Row4(props) {
    let checkboxComponents = []
    for (let i = 0; i < props.state.length; i++) {
        checkboxComponents.push(
            <Checkbox dispatch={props.dispatch} id={props.state[i].id} checkboxChecked={props.state[i].checked} checkboxText={props.textContent[i]} key={props.state[i].id} checkboxValue={props.state[i].checkboxValue}  />
        )
    }
    return(
        <div className='row-4'>
            {checkboxComponents}
        </div>
    )
}
export default Row4;
