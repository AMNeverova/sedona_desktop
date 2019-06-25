import React from 'react';
import Item from './Item';

function Menu(props) {
    let itemComponents = []
    for (var i = 0; i < props.state.length; i++) {
        itemComponents.push(<Item itemId={props.state[i].id} subitemIds={props.state[i].subitemIds} className={props.state[i].itemClassName} key={props.state[i].id} dispatch={props.dispatch} textContent={props.textContent[i].itemText} subItems={props.textContent[i].subItems} />)
    }
    return (
        <div className='menu'>
            {itemComponents}
        </div>
    )
}
export default Menu;
