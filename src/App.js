import React from 'react';
import './App.css';
import About from "./Pages/About"
import Nav from "./Pages/Nav"
import Shop from "./Pages/Shop"
import AppointmentList from "./Pages/Appointment"
import { BrowserRouter as Agus, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Agus>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route path="/about" component ={About} />
          <Route exact path="/shop" component ={Shop} />
          <Route path="/shop/:id" component ={AppointmentList} />
        </Switch>
      </div>
    </Agus>
  );
}

const Home = () => (
  <div>
    <h1>
      Home Page
    </h1>
  </div>
)

export default App;
