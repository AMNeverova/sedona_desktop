import React from 'react';
import Subitem from './Subitem';
import { mobileMenuActionCtreator } from '../../redux/actionCreators';

function Item(props) {

    let SubitemComponents = []

   props.state.map(function(item){
        if (item.id === props.itemId) {
           SubitemComponents = item.subItems.map(function(subitem){
                return <Subitem subitemText={subitem} />
            })
        }
    })

    function handleClick() {
       props.dispatch(mobileMenuActionCtreator())
    }

    return(
        <div className={props.className}>{
            props.itemText? <a>{props.itemText}</a> :
            <span>
                <img src="../img/logotype-desktop.png" alt="City of Sedona" class="logo" />
                <img src="../img/icon-menu.png" onClick={handleClick} alt="menu" class="icon-menu" />
            </span>}
                {SubitemComponents.length !== 0? <div className='subitems'>{SubitemComponents}</div>
                : null}
        </div>
    )
}

export default Item;