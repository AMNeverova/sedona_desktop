import React from 'react';
import Item from './Item';

function Menu(props) {

    let ItemComponents = props.state.map(function(item){
            return <Item state={props.state} className={item.itemClassName} itemText={item.itemText} key={item.id} itemId={item.id} dispatch={props.dispatch} />
    })

    return(
        <div className="menu">
         {ItemComponents}
        </div>
    )
}

export default Menu;