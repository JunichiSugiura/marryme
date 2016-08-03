import React, { Component } from 'react';

export default class Status extends Component {
  render() {
    return(
      <div id="status-message-wrapper" className="ui warning message transition hidden">
        <div className="header">Status message</div>
        <p id="status"></p>
      </div>
    );
  }
}
