import React from 'react';
import Item from './Item';

function Menu(props) {

    let ItemComponents = []

    for (var i = 0; i <= 4 ; i++) {
        ItemComponents.push(<Item itemId={props.state[i].id} subitemIds={props.state[i].subitemIds} className={props.state[i].itemClassName} key={props.state[i].id} dispatch={props.dispatch} textContent={props.textContent[i].itemText} subItems={props.textContent[i].subItems} />)
    }

    return(
        <div className="menu">
         {ItemComponents}
        </div>
    )
}

export default Menu;