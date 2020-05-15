import React, { Component } from "react";
import "./App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    infos: [
      {
        id: 0,
        name: "ruslan",
        phone: "live:.cid.1f0482219d42ee4d"
      },
      {
        id: 1,
        name: "maxim",
        phone: "456"
      }
    ],
    keyword: ""
  };

  handleCreate = newInfo => {
    const { infos } = this.state;
    this.setState({
      infos: infos.concat({ id: infos.length++, ...newInfo })
    });
  };

  handleDelete = delId => {
    const { infos } = this.state;
    this.setState({
      infos: infos.filter(user => user.id !== delId)
    });
  };

  handleUpdate = (id, data) => {
    const { infos } = this.state;
    this.setState({
      infos: infos.map(info => (info.id === id ? { ...info, ...data } : info))
    });
  };

  onChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  render() {
    const { infos, keyword } = this.state;
    const filterInfo = infos.filter(
      (info, key) => info.name.indexOf(keyword) !== -1
    );
    return (
      <div className="App container">
        <PhoneForm onCreate={this.handleCreate} infos={infos} />
        <input
          value={keyword}
          className="form-control"
          onChange={this.onChange}
        />
        <PhoneInfoList
          infos={filterInfo}
          onDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
