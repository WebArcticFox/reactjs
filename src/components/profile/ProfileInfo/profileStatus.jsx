import React from "react";
import s from './profileInfo.module.css'

class ProfileStatus extends React.Component{
    state = {
        isEditMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            isEditMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState( {
            isEditMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.isEditMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status || "Write status"}</span>
                </div>
                }
                {this.state.isEditMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deActivateEditMode } value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;