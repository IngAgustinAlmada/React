import React, { Component } from 'react';
import PropTypes from "prop-types";

export class AppointmentItem extends Component {
    render() {
        const { id, buildingId, boilerId,start_timestamp, end_timestamp } = this.props.appointment;
        return (
            <div >
                <div>
                    Id: {id} - Building: {buildingId} - Boiler: {boilerId} - Start Date: {start_timestamp} - End Date: {end_timestamp}

                    <button onClick={this.props.delAppointment.bind(this,id)} style={btnStyle}>
                        x
                    </button>
                    <button onClick={this.props.editAppointment.bind(this, this.props.appointment)} style={btnStyle}>
                        Edit
                    </button>
                </div>
            </div>
        )
    }
}

//PropTypes
AppointmentItem.propTypes = {
    appointment:PropTypes.object.isRequired,
    delAppointment:PropTypes.func.isRequired,
    editAppointment:PropTypes.func.isRequired,
}

const btnStyle = {
    background: "red",
    color: "white",
    border: "1px solid white",
    padding: "5px 10px",
    borderRadius: "10px",
    cursor: "pointer",
    float: "right",
};
export default AppointmentItem
