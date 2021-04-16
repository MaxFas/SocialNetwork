import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {DataUserType, setAuthUserData} from "../../redux/auth-reducer";
import {StoreReduxType} from "../../redux/redux-store";

type HeaderContainerType = MSTPType&MDTPType

type MDTPType = {
    setAuthUserData: (userData: DataUserType) => void
}

type MSTPType = {
    isAuth: boolean
    login: string|null
}


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.setAuthUserData(response.data.data)
                    }
                }
            )

    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: StoreReduxType):MSTPType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);