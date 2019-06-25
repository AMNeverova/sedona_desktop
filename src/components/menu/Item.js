import React from 'react';
import Subitem from './Subitem';
import { mobileMenuActionCreator } from '../../redux/actionCreators';
import logotype from '../../../public/img/logotype-desktop.png';
import menuIcon from '../../../public/img/icon-menu.png';

function Item(props) {
    let SubitemComponents = []
    for (let i = 0; i < props.subItems.length; i++) {
       SubitemComponents.push(<Subitem subitemText={props.subItems[i].text} key={props.subitemIds[i]} />)
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
                <img src={logotype} alt='City of Sedona' className='logo' />
                <img src={menuIcon} onClick={handleClick} alt='menu' className='icon-menu' />
            </span>}
                {SubitemComponents.length !== 0? <div className='subitems'>{SubitemComponents}</div>
                : null}
        </div>
    )
}
export default Item;
