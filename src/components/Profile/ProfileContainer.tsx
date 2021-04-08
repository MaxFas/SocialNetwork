import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreReduxType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/state";

export type ProfileContainerType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount(): void {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/Profile/2`)
            .then(response => this.props.setUserProfile(response.data))
    }

    render() {
        return <Profile profile={this.props.profile} />
    }

}

const mapStateToProps = (state: StoreReduxType) => {
   return  {profile: state.profilePage.profile}
}

connect (mapStateToProps, {setUserProfile})(ProfileContainer)

export default ProfileContainer;