import React from 'react';

class Input extends React.Component {
    render(props, handleChange) {
        return (
            <div className={props.state.mainDivClassName}>
            <label>{props.state.mainDivClassName== 'phone' && !props.state.filled? <p className="error">{props.textContent.textForError}</p>: null}
                <span className={props.state.spanClassName}>{props.textContent.labelText}</span>
                <input onChange={handleChange} type={props.state.inputType} value={props.state.value} className={props.state.className} placeholder={props.textContent.placeholder} id="phone-number" required={true} />
                {props.state.mainDivClassName != 'text'? <div className={props.state.logoClassName}></div> : null}
            </label>
        </div>
        )
    }
}

export default Input;