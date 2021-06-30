import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {StoreReduxType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

type MDTPType = {
    initializeApp: () => void
}

type MSTPType = {
    initializedSuccess: boolean
}

type AppType = MDTPType & MSTPType

class App extends Component<AppType> {

    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initializedSuccess) return <Preloader/>

        return (
            <BrowserRouter>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Switch>
                            <Route exact path={'/SocialNetwork'}  render={()=> <ProfileContainer />}/>
                            <Route path={'/dialogs'} render={() => {
                                return <React.Suspense fallback={<Preloader/>}> <DialogsContainer/> </React.Suspense>}}/>
                            <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/Login'} render={() => <Login/>}/>
                            <Route path='*' render={()=><h1 style={{textAlign: "center", marginTop: "300px"}}>404: PAGE NOT FOUND</h1>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

}

const MSTP = (state: StoreReduxType): MSTPType => ({initializedSuccess: state.App.initializedSuccess})

export default connect(MSTP, {initializeApp})(App);

