import React from 'react';
import { inputPhoneActionCreator } from '../redux/actionCreators';


function Phone(props) {

    function handleChange(evt) {
        let newText = evt.target.value
        props.dispatch(inputPhoneActionCreator(newText))
    }

    return (
        <div className='phone'>
            <label>
                <p className="error">Ошибка, перепроверьте номер</p>
                <span className="required">Телефон</span>
                <input onChange={handleChange} type="tel" value={props.state.value} class="input-phone" placeholder="Введите телефон" id="phone-number" required="true" />
                <div className="phone-logo"></div>
            </label>

        </div>
    )
}

export default Phone;