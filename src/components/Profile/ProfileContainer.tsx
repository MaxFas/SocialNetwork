import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreReduxType} from "../../redux/redux-store";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux"


type MSTPType = {
    profile: ProfileType| null
}
type MDTPType = {
    getUserProfile: (userID: string) => void
}
type PathParamsType = {
    userID: string,
}

type ConnectPropsType = MSTPType & MDTPType
type ProfileContainerType = RouteComponentProps<PathParamsType>&ConnectPropsType

class ProfileContainer extends React.Component<ProfileContainerType, {}>{

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID){
            userID =  '2'
        }
        this.props.getUserProfile(userID)
    }


    render() {
        return <Profile profile={this.props.profile} />
    }

}


const mapStateToProps = (state: StoreReduxType): MSTPType => ({
    profile: state.profilePage.profile,
})


export default compose <React.ComponentType>(
    connect (mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)