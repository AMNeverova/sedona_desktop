import React from 'react';
import Menu from './menu/Menu';
import HeaderText from './HeaderText';

function Header(props) {
    return (
        <div className='header'>
            <Menu state={props.state} textContent={props.textContent.menu} dispatch={props.dispatch} />
            <HeaderText text={props.textContent.headerText} />
        </div>
    )
}

export default Header;