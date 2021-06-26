import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StoreReduxType} from "../redux/redux-store";


type MSTPType = {
    isAuth: boolean
}

let mapStateToProps = (state: StoreReduxType): MSTPType => {
    return  {isAuth: state.auth.isAuth}
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent (props: MSTPType) {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/Login'}/>
        return <Component {...restProps as T} />
    }

    return connect(mapStateToProps)(RedirectComponent)
}