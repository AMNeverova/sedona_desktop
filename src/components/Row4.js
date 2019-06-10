import React from 'react';
import Checkbox from'./Checkbox'

function Row4(props) {

    let CheckboxComponents = props.checkboxesState.map((item) => {
        return(
            <Checkbox dispatch={props.dispatch} id={item.id} checkboxChecked={item.checked} checkboxText={item.checkboxText} key={item.id} checkboxValue={item.checkboxValue}  />
        )
    })

    return(
        <div className='row-4'>
            {CheckboxComponents}
        </div>
    )
}

export default Row4;