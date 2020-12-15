import React, { Component } from 'react';
import AppointmentItem  from './AppointmentItem';
import PropTypes from "prop-types";

class Appointment extends Component {
  render() {
    return (
      <div className="ContainerData">
        <h1>Appointments</h1>
        {this.props.appointmentValues.map((appointment) => (
          <AppointmentItem
          key={appointment.id}
          appointment={appointment}
          editAppointment={this.props.editAppointment}
          delAppointment={this.props.delAppointment} />
          ))}
      </div>
    )
  }
}

//PropTypes
Appointment.propTypes = {
    appointmentValues:PropTypes.array.isRequired,
    delAppointment:PropTypes.func.isRequired,
}

export default Appointment;