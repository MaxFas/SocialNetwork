import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, RootStateType} from "./redux/state";


export type AppPropsType = {
    state:  RootStateType
    dispatch: (actions: ActionsTypes) => void
}


function App(props: AppPropsType) {

    return (
<BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/Dialogs'} render={()=> <Dialogs dialogPageType={props.state.dialogsPage}/>}/>
                <Route path={'/Profile'} render={()=> <Profile dispatch={props.dispatch} profile={props.state.profilePage}/>}/>
                <Route path={'/Settings'} />
                <Route path={'/Music'} />
                <Route path={'/News'} />
            </div>
        </div>
</BrowserRouter>
    )
}

export default App;

