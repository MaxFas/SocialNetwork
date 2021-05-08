import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreReduxType} from "../../redux/redux-store";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";
import {getProfileStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux"


type MSTPType = {
    profile: ProfileType| null
    status: string
}
type MDTPType = {
    getUserProfile: (userID: string) => void
    getProfileStatus: (userID: string) => void
    updateStatus: (status: string) => void
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
            userID =  '15990'
        }
        this.props.getUserProfile(userID)
        this.props.getProfileStatus(userID)
    }


    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }

}


const mapStateToProps = (state: StoreReduxType): MSTPType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose <React.ComponentType>(
    connect (mapStateToProps, {getUserProfile, getProfileStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)