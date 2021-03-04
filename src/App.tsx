import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from "./redux/state";


export type AppPropsType = {
    state:  RootStateType
    addPost: () => void
    updateText: (newText: string) => void
}


function App(props: AppPropsType) {

    return (
<BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/Dialogs'} render={()=> <Dialogs dialogPageType={props.state.dialogsPage}/>}/>
                <Route path={'/Profile'} render={()=> <Profile addPost={props.addPost} profile={props.state.profilePage} updateText={props.updateText}/>}/>
                <Route path={'/Settings'} />
                <Route path={'/Music'} />
                <Route path={'/News'} />
            </div>
        </div>
</BrowserRouter>
    )
}

export default App;

