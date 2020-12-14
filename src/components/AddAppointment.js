import React, { Component } from 'react';
import PropTypes from "prop-types"

export class AddAppointment extends Component {
    state = {
        buildingId:"",
        boilerId:"",
        start_timestamp:"",
        end_timestamp:"",
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addAppointment(
            this.state.buildingId,
            this.state.boilerId,
            this.state.start_timestamp,
            this.state.end_timestamp,
        );
        this.setState({
            buildingId:"",
            boilerId:"",
            start_timestamp:"",
            end_timestamp:""
        })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    render() {
        return (
            <>
                <h3>Add new appointment</h3>

                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="buildingId"
                        style={inputStyle}
                        placeholder="Building Id..."
                        value={this.state.buildingId}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="boilerId"
                        style={inputStyle}
                        placeholder="Boiler Id..."
                        value={this.state.boilerId}
                        onChange={this.onChange}
                    />
                    <input
                        type="date"
                        name="start_timestamp"
                        style={inputStyle}
                        value={this.state.start_timestamp}
                        onChange={this.onChange}
                    />
                    <input
                        type="date"
                        name="end_timestamp"
                        style={inputStyle}
                        value={this.state.end_timestamp}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        style={inputStyle}
                    />
                </form>
            </>
        )
    }
}

//PropTypes
AddAppointment.propTypes = {
    addAppointment:PropTypes.object.isRequired,
}

const inputStyle = {
    padding: "10px",
    width: "50%",
    margin: "5px",
    borderRadius: "5px",
  };

export default AddAppointment


