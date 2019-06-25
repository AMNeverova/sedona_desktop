import React from 'react';

function Footer(props) {
    return(
        <div className='footer'>
            <div className='visit'>
                <p>{props.textContent.visitSedona}</p>
            </div>
            <div className='links'>
                <div className='twitter'>
                    <a href="#"></a>
                </div>
                <div className='facebook'>
                    <a href="#"></a>
                </div>
                <div className='youtube'>
                    <a href="#"></a>
                </div>
            </div>
            <div className='academy'>
                <p>{props.textContent.developed}</p>
                <div className='academy-logo'></div>
            </div>
        </div>
    )
}
export default Footer;
