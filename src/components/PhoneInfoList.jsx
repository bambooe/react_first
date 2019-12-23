import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";
import PropTypes from "prop-types";

class PhoneInfoList extends Component {
  static propTypes = {
    infos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  static defaultProps = {
    infos: [],
    onUpdate: () => console.warn("onUpdate not defined"),
    onDelete: () => console.warn("onUpdate not defined")
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.infos !== this.props.infos;
  }

  render() {
    const { infos } = this.props;
    return (
      <div className="row">
        {infos.map((info, index) => (
          <PhoneInfo
            key={index}
            info={info}
            onDelete={this.props.onDelete}
            onUpdate={this.props.onUpdate}
          />
        ))}
      </div>
    );
  }
}
export default PhoneInfoList;
