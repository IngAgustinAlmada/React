import React, { Component } from 'react';
import AppointmentItem  from './AppointmentItem';
import PropTypes from "prop-types";

class Appointment extends Component {
  render() {
    return this.props.appointments.map((appointment) => (
    <AppointmentItem key={appointment.id} appointment={appointment} markComplete=
    {this.props.markComplete} delAppointment={this.props.delAppointment} />
    ));
  }
}

//PropTypes
Appointment.propTypes = {
    appointments:PropTypes.array.isRequired,
    delAppointment:PropTypes.func.isRequired,
}

export default Appointment;