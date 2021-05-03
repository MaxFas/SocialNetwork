import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreReduxType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/state";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";
import {getUserProfile} from "../../redux/profile-reducer";


type MSTPType = {
    profile: ProfileType| null
    isAuth: boolean
}
type MDTPType = {
    getUserProfile: (userID: string) => void
}
type ConnectPropsType = MSTPType & MDTPType

type ProfileContainerType = RouteComponentProps<PathParamsType>& ConnectPropsType

class ProfileContainer extends React.Component<ProfileContainerType, {}>{

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID){
            userID =  '2'
        }
        this.props.getUserProfile(userID)
    }


    render() {
        return <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
    }

}


const mapStateToProps = (state: StoreReduxType): MSTPType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)
type PathParamsType = {
    userID: string,
}

export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

