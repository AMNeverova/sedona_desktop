import React from 'react';

function TextObligatory(props) {
    return(
        <div className="obligatory">
            <p className="obligatory-field">* &ndash; {props.text}</p>
        </div>
    )
}

export default TextObligatory;