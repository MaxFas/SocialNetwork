import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, RootStateType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {StoreReduxType} from "./redux/redux-store";


export type AppPropsType = {
    store:  StoreReduxType
    dispatch: (actions: ActionsTypes) => void
}


function App(props: AppPropsType) {

    return (
<BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/Dialogs'} render={()=> <DialogsContainer store={props.store}/>}/>
                <Route path={'/Profile'} render={()=> <Profile store={props.store}/>}/>
                <Route path={'/Settings'} />
                <Route path={'/Music'} />
                <Route path={'/News'} />
            </div>
        </div>
</BrowserRouter>
    )
}

export default App;

