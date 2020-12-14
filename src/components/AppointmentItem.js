import React, { Component } from 'react';
import PropTypes from "prop-types";

export class AppointmentItem extends Component {
    getStyle = () => {
        return {
            backgroundColor:"lightgrey",
            padding:"10px",
            borderBottom: "1px black dotted",
            textDecoration: this.props.appointment.completed ?
                "line-through" : "none"
            }
        }

    render() {
        const { id, buildingId, boilerId,start_timestamp, end_timestamp } = this.props.appointment;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> {" "}
                Id: {id} - Building: {buildingId} - Boiler: {boilerId} - Start Date: {start_timestamp} - End Date: {end_timestamp}
                <button onClick={this.props.delAppointment.bind(this,id)} style={btnStyle}>x</button>
                <button style={btnStyle}>Edit</button>
                </p>
            </div>
        )
    }
}

//PropTypes
AppointmentItem.propTypes = {
    appointment:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delAppointment:PropTypes.func.isRequired,
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
