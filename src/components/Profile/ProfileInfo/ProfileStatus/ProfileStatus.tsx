import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    ChangeModeOn = () => {
        this.setState({
            editMode: true
        })
    }

    ChangeModeOff = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {

        return (
            <>
                {this.state.editMode ?
                    <div>
                        <input type="text" onChange={this.onStatusChange} onBlur={this.ChangeModeOff} autoFocus={true}
                               value={this.state.status}/>
                    </div> :
                    <div>
                        <span onDoubleClick={this.ChangeModeOn}>{this.props.status?this.props.status: "------"}</span>
                    </div>}


            </>
        )
    }
}