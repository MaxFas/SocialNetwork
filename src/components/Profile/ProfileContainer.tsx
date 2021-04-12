import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreReduxType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/state";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";


type MSTPType = {
    profile: ProfileType| null
}
type MDTPType = {
    setUserProfile: (profile: ProfileType|null) => void
}
type ConnectPropsType = MSTPType & MDTPType

type ProfileContainerType = RouteComponentProps<PathParamsType>& ConnectPropsType

class ProfileContainer extends React.Component<ProfileContainerType, {}>{

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID){
            userID = '2'
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/Profile/` + userID)
            .then(response => this.props.setUserProfile(response.data))
    }

    render() {
        return <Profile profile={this.props.profile} />
    }

}


const mapStateToProps = (state: StoreReduxType): MSTPType => ({
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)
type PathParamsType = {
    userID: string,
}

export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

