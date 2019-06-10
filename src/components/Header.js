import React from 'react';
import Menu from './menu/Menu';
import HeadingText from './HeadingText';

function Header(props) {

    return (
        <div className='header'>
            <Menu state={props.state} dispatch={props.dispatch} />
            <HeadingText />
        </div>
    )
}

export default Header;