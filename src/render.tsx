import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderMainTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateText={updateText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}