import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <div className={this.props.state.state.mainDivClassName}>
                <label>{this.props.state.state.id == '4' && !this.props.state.state.filled? <p className='error'>{this.props.state.textContent.textForError}</p>: null}
                    <span className={this.props.state.state.spanClassName}>{this.props.state.textContent.labelText}</span>
                    <input onChange={this.props.handleChange} type={this.props.state.state.inputType} value={this.props.state.state.value} className={this.props.state.state.className} placeholder={this.props.state.textContent.placeholder} required={true} />
                    {this.props.state.state.id > 3 ? <div className={this.props.state.state.logoClassName}></div> : null}
                </label>
            </div>
        )
    }
}
export default Input;
