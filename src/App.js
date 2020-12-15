import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Appointment from "./components/Appointment";
import AddAppointment from "./components/AddAppointment";
import { v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends Component {
  state = {
    appointmentValues:[],
    appointmentEdit: null,
  }

  componentDidMount(){
    const dataAppointments = require('./data/appointment.json')
    this.setState(
      { appointmentValues: dataAppointments });
  }

  editAppointment = (appointmentX) => {
    this.setState({
      appointmentEdit: appointmentX,
    });
  };

  cancelAppointment = (appointmentX) => {
    this.setState({
      addAppointment: appointmentX,
    });
  };

  updateAppointment = (id,buildingId,boilerId,start_timestamp,end_timestamp) => {
    this.setState({
      appointmentValues: this.state.appointmentValues.map((appointment) => {
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

  delAppointment = (id) => {
    this.setState({
    appointmentValues: [...this.state.appointmentValues.filter((appointment) => appointment.id !== id)] });
    console.log("Delete Working");
  }

  addAppointment = (buildingId,boilerId,start_timestamp,end_timestamp) => {
    const newAppointment = {
      id: uuidv4(),
      buildingId,
      boilerId,
      start_timestamp,
      end_timestamp
    };
    this.setState({appointmentValues: [...this.state.appointmentValues, newAppointment] });
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
                appointmentValues = {this.state.appointmentValues}
                cancelAppointment={this.cancelAppointment}
                delAppointment={this.delAppointment}
                editAppointment={this.editAppointment}/>
              </React.Fragment>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
