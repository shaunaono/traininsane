import React, { Component } from "react";
import "./save.css";

class Save extends Component {
  render() {
    return (
      <div className="save-container">
        <h6>{this.props.saveName}</h6>
        <p className="likes">{`${this.props.likesCount} Likes`}</p>
      </div>
    );
  }
}
export default Save;
