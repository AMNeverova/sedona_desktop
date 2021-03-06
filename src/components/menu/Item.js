import React from 'react';
import Subitem from './Subitem';
import { mobileMenuActionCreator } from '../../redux/actionCreators';
import logotype from '../../../public/img/logotype-desktop.png';
import menuIcon from '../../../public/img/icon-menu.png';

function Item(props) {
    let subitemComponents = []
    for (let i = 0; i < props.subItems.length; i++) {
       subitemComponents.push(<Subitem subitemText={props.subItems[i].text} key={props.subitemIds[i]} />)
    }
    function showSubitems(className) {
        let mainClassStart = 5;
        let mainClassEnd = 12;
        let itemException = 3;
        let itemClass = className.slice(mainClassStart, mainClassEnd)
        let item = document.querySelector(`.${itemClass}`)
        if (document.body.clientWidth <= 480) {
            if (itemClass.indexOf(itemException) == -1) {
                item.querySelector('.subitems').classList.toggle('show')
            }
        }
    }
    function handleClick() {
       props.dispatch(mobileMenuActionCreator())
    }
    return(
        <div onClick={() => showSubitems(props.className)} className={props.className}>{
            props.textContent? <a>{props.textContent}</a> :
            <span>
                <img src={logotype} alt={props.altForImg[0]} className='logo' />
                <img src={menuIcon} onClick={handleClick} alt={props.altForImg[1]} className='icon-menu' />
            </span>}
                {subitemComponents.length !== 0? <div className='subitems'>{subitemComponents}</div>
                : null}
        </div>
    )
}
export default Item;
