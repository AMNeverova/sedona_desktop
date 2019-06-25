import React from 'react';
import Header from './Header';
import Container from './Container';

function App(props) {
    return ( 
        <div>
            <Header dispatch={props.dispatch} state={props.state.menu} textContent={props.state.textContent} />
            <Container dispatch={props.dispatch} state={props.state.form} textContent={props.state.textContent} />
        </div>
    )
}
export default App;
