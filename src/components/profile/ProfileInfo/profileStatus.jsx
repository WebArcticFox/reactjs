import React from "react";
import s from './profileInfo.module.css'

class ProfileStatus extends React.Component{

    state = {
        isEditMode: false
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
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.isEditMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>1111{this.props.status}</span>
                </div>
                }
                {this.state.isEditMode &&
                <div>
                    <input autoFocus={true} onBlur={ this.deActivateEditMode } defaultValue="111111"/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;