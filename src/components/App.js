import React from "react";
import Header from './Header';
import Container from './Container';

function App(props) {

    return ( <div>
        <Header dispatch={props.dispatch} state={props.state.menu} />
        <Container dispatch={props.dispatch} state={props.state.form} />
        </div>
    )

}

export default App;