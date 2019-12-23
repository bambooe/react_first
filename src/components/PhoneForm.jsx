import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

class PhoneForm extends Component {
  static propTypes = {
    onCreate: PropTypes.func.isRequired
  };

  state = {
    name: "",
    phone: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAction = e => {
    e.preventDefault();

    this.handleCreate(this.state);
    this.setState({
      name: "",
      phone: ""
    });
  };

  handleCreate = newInfo => {
    this.props.onCreate(newInfo);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Phone Book</h1>
        </div>
        <div className="col-md-12">
          <form onSubmit={this.handleAction}>
            <div className="row">
              <div className="col-sm-3 ">
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  className="form-control"
                  autoFocus
                />
              </div>
              <div className="col-sm-3 ">
                <input
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  className="form-control"
                />
              </div>
              <div className="col-sm-3 ">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PhoneForm;
