import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch)
  };
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    web3.eth.getAccounts((err, res) => {
      if(err != null) {
        return console.log('There was an error fetching you accounts.');
      }

      if(res.length === 0) {
        return console.log("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      }

      console.log(res);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main {...this.props} />
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
