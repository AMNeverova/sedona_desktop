import React from 'react';
import Subitem from './Subitem';
import { mobileMenuActionCreator } from '../../redux/actionCreators';

function Item(props) {

let SubitemComponents = []

props.state.map(function(item){
    if (item.id === props.itemId) {
       SubitemComponents = item.subItems.map(function(subitem){
            return <Subitem subitemText={subitem.text} key={subitem.id} />
        })
    }
})

    function showSubitems(itemId) {
        let items = document.querySelectorAll('.item')
        if (items[itemId-1].className.indexOf('visible') != -1) {
            if (items[itemId-1].style.height == 'auto') {
                items[itemId-1].style.height = '3.5rem'
            } else {
                items[itemId-1].style.height = 'auto'
            }
        }
    }

    function handleClick() {
       props.dispatch(mobileMenuActionCreator())
    }

    return(
        <div onClick={() => showSubitems(props.itemId)} className={props.className}>{
            props.itemText? <a>{props.itemText}</a> :
            <span>
                <img src="./img/logotype-desktop.png" alt="City of Sedona" className="logo" />
                <img src="./img/icon-menu.png" onClick={handleClick} alt="menu" className="icon-menu" />
            </span>}
                {SubitemComponents.length !== 0? <div className='subitems'>{SubitemComponents}</div>
                : null}
        </div>
    )
}

export default Item;