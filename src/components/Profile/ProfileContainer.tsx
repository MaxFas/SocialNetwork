import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreReduxType} from "../../redux/redux-store";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";
import {
    getProfileStatus,
    getUserProfile,
    ProfileType,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {compose} from "redux"
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


type MSTPType = {
    profile: ProfileType
    status: string
    authorizedUserID: number|null
    isAuth: boolean
}
type MDTPType = {
    getUserProfile: (userID: string) => void
    getProfileStatus: (userID: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => void
}
type PathParamsType = {
    userID: string,
    history: string
}

type ConnectPropsType = MSTPType & MDTPType
type ProfileContainerType = RouteComponentProps<PathParamsType>&ConnectPropsType

class ProfileContainer extends React.Component<ProfileContainerType, {}>{

    refreshProfile () {
        let userID = this.props.match.params.userID
        if (!userID){
            if(this.props.authorizedUserID) {
                userID = this.props.authorizedUserID.toString()
                if(!userID) {
                    this.props.history.push('/Login')
                }
            }
        }
        this.props.getUserProfile(userID)
        this.props.getProfileStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile()
        }
}


    render() {
        return <Profile saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userID}
                        profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }

}


const mapStateToProps = (state: StoreReduxType): MSTPType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.id,
    isAuth: state.auth.isAuth,
})


export default compose <React.ComponentType>(
    connect (mapStateToProps, {getUserProfile, getProfileStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)