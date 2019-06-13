import React from 'react';
import Subitem from './Subitem';
import { mobileMenuActionCreator, mobileMenuItemClickActionCreator } from '../../redux/actionCreators';

function Item(props) {
    let show = {
        height: 'auto'
    }

    let hide = {
        display: '3.5rem'
    }

let SubitemComponents = []

props.state.map(function(item){
    if (item.id === props.itemId) {
       SubitemComponents = item.subItems.map(function(subitem){
            return <Subitem subitemText={subitem.text} key={subitem.id} />
        })
    }
})

    function showSubitems(className) {
        let itemClass = className.slice(5,12)
        let item = document.querySelector(`.${itemClass}`)
        if (document.body.clientWidth <= 480) {
            if (itemClass.indexOf('3') == -1) {
                if (item.querySelector('.subitems').style.display == 'block') {
                    item.querySelector('.subitems').style.display = 'none'
                } else {
                    item.querySelector('.subitems').style.display = 'block'
                }
            }
        }
}

    function handleClick() {
       props.dispatch(mobileMenuActionCreator())
    }

    return(
        <div onClick={() => showSubitems(props.className)} className={props.className}>{
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