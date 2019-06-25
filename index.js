import React from "react";
import ReactDOM from "react-dom";
import App from "./src/components/App";
import './src/styles/main.scss';
import store from './src/redux/store'

function rerender() {
    ReactDOM.render(<App dispatch={store.dispatch.bind(store)} state={store.getState()} />, document.querySelector(".wrapper"));
}

rerender()

store.subscribe(rerender)
