import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {StoreReduxType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";

type MDTPType = {
    initializeApp: () => void
}

type MSTPType = {
    initializedSuccess: boolean
}

type AppType = MDTPType&MSTPType

class App extends Component<AppType>{

    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.initializedSuccess) return <Preloader/>

        return (
            <BrowserRouter>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Route path={'/dialogs'} render={()=> <DialogsContainer />}/>
                        <Route path={'/profile/:userID?'} render={()=> <ProfileContainer />}/>
                        <Route path={'/users'} render={()=> <UsersContainer />}/>
                        <Route path={'/login'} render={()=> <Login />}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

}

const MSTP = (state: StoreReduxType): MSTPType => ({initializedSuccess: state.App.initializedSuccess})

export default connect(MSTP, {initializeApp}) (App) ;

