import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Appointment from "./components/Appointment";
import AddAppointment from "./components/AddAppointment";
import { v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends Component {
  state = {
    appointments:[],
    appointmentEdit: null,
  }

  componentDidMount(){
    const dataAppointments = require('./data/appointment.json')
    this.setState(
      { appointments: dataAppointments });
  }

  //Edit Appointment
  editAppointment = (appointmentX) => {
    this.setState({
      appointmentEdit: appointmentX,
    });
  };

  // Edit an Appointment
  updateAppointment = (id,buildingId,boilerId,start_timestamp,end_timestamp) => {
    this.setState({
      appointments: this.state.appointments.map((appointment) => {
        if (appointment.id === id) {
          appointment.buildingId = buildingId;
          appointment.boilerId = boilerId;
          appointment.start_timestamp = start_timestamp;
          appointment.end_timestamp = end_timestamp;
        }
        return appointment;
      }),
    });
  };

  //Delete Appointment
  delAppointment = (id) => {
    this.setState({
    appointments: [...this.state.appointments.filter((appointment) => appointment.id !== id)] });
  }

  //Add Appointment
  addAppointment = (buildingId,boilerId,start_timestamp,end_timestamp) => {
    const newAppointment = {
      id: uuidv4(),
      buildingId,
      boilerId,
      start_timestamp,
      end_timestamp
    };
    this.setState({appointments: [...this.state.appointments, newAppointment] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div>
              <React.Fragment>
                <AddAppointment
                addAppointment={this.addAppointment}
                updateAppointment={this.updateAppointment}
                appointmentEdit={this.state.appointmentEdit}/>
                <Appointment
                appointments = {this.state.appointments}
                delAppointment={this.delAppointment}
                editAppointment={this.state.editAppointment}/>
              </React.Fragment>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
