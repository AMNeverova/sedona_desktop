import React from 'react';
import Menu from './menu/Menu';
import HeaderText from './HeaderText';
import data from '../redux/data_rus.json';

function Header(props) {

    return (
        <div className='header'>
            <Menu state={props.state} dispatch={props.dispatch} />
            <HeaderText text={data.headerText} />
        </div>
    )
}

export default Header;