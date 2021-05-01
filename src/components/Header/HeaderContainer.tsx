import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth} from "../../redux/auth-reducer";
import {StoreReduxType} from "../../redux/redux-store";

type HeaderContainerType = MSTPType&MDTPType

type MDTPType = {
    setAuth: () => void
}

type MSTPType = {
    isAuth: boolean
    login: string|null
}


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.setAuth()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: StoreReduxType):MSTPType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuth})(HeaderContainer);