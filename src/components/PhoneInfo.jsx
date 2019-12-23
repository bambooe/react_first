import React, { Component } from "react";
import PropTypes from "prop-types";

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: "",
    phone: ""
  };
  static propTypes = {
    info: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  handleDelete = () => {
    this.props.onDelete(this.props.info.id);
  };

  handleEdit = () => {
    const { info } = this.props;
    this.setState({
      editing: !this.state.editing,
      name: info.name,
      phone: info.phone
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleUpdate = () => {
    const { onUpdate, info } = this.props;
    this.setState({
      editing: !this.state.editing
    });
    onUpdate(info.id, {
      name: this.state.name,
      phone: this.state.phone
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { editing } = this.state;
    if (nextProps.info === this.props.info && !editing && !nextState.editing) {
      return false;
    }
    return true;
  }

  render() {
    const style = {
      border: "solid 1px black",
      padding: "8px",
      margin: "8px"
    };

    const { info } = this.props;
    //->edit
    if (!this.state.editing) {
      return (
        <div style={style} className="col-md-4">
          <div>
            <p>{info.name}</p>
          </div>
          <div>
            <p>{info.phone}</p>
          </div>
          <div>
            <button onClick={this.handleDelete} className="btn btn-danger">
              Delete
            </button>
            <button
              onClick={this.handleEdit}
              className="btn btn-success btn-xs"
            >
              <i className="fa fa-gsl fa-spin"></i> Edit
            </button>
          </div>
        </div>
      );
    } else {
      //<-edit
      return (
        <div style={style} className="col-md-4">
          <div>
            <input
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              className="form-control"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button onClick={this.handleUpdate} className="btn btn-danger">
              Update
            </button>
            <button
              onClick={this.handleEdit}
              className="btn btn-success btn-xs"
            >
              <i className="fa fa-gsl fa-spin"></i> Cancel
            </button>
          </div>
        </div>
      );
    }
  }
}

export default PhoneInfo;
