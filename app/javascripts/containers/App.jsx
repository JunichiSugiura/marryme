import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch)
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui center aligned icon header">
          <h1>Marry me</h1>
          <h3>Reliable marriage &amp; economic divorce on the blockchain.</h3>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
