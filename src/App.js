import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Appointment from "./components/Appointment";
import AddAppointment from "./components/AddAppointment";
import { v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends Component {
  state = {
    appointments:[]
  }

  componentDidMount(){
    const dataAppointments = require('./data/appointment.json')
    this.setState({ appointments: dataAppointments });
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ appointments: this.state.appointments.map(appointment => {
      if(appointment.id === id){
        appointment.completed = !appointment.completed
       }
      return appointment;
    })
  })
  }

  //Delete Appointment
  delAppointment = (id) => {
    this.setState({
    appointments: [...this.state.appointments.filter(appointment => appointment.id !== id)] });
  }

  //Add Appointment
  AddAppointment = (buildingId,boilerId,start_timestamp,end_timestamp) => {
    const newAppointment = {
      "id": uuidv4(),
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
          <div className="Container">
            <Route exact path="/" render ={props => (
              <React.Fragment>
                <AddAppointment addAppointment={this.addAppointment} />
                <Appointment appointments = {this.state.appointments} markComplete = {this.markComplete} delAppointment={this.delAppointment}/>
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
