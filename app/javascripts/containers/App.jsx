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

        <div className="form-quickserach-wrapper ui center aligned grid">
          <form id="search-marriage" className="ui form aligned">
            <div className="ui category search">
              <div className="ui icon input">
                <input name="search-marriage" type="text" placeholder="Find your marriage by id" />
                <i className="search icon"></i>
              </div>
            </div>
          </form>
        </div>

        <form id="form-getmarried" className="ui form">
          <div className="row">
            <div className="ui two column middle aligned very relaxed stackable grid">
              <div className="account-1 column">
                <div id="account_1" className="field field-account">
                  <label>Account ID</label>
                  <input type="text" name="account_1" placeholder="Ethereum account id" />
                </div>

                <div className="field field-ether">
                  <p className="ui my-label">Initial amount of Ether</p>
                  <div className="ui right labeled input">
                    <input type="number" step="0.1" name="ether_1" placeholder="100" />
                    <div className="ui basic label">
                      ether
                    </div>
                  </div>
                </div>

                <div className="field field-share">
                  <p className="ui my-label">Share after divorce</p>
                  <div className="ui right labeled input">
                    <input id="share_1" className="share-value" type="number" name="share_1" min="0" max="100" />
                    <div className="ui basic label"> % </div>
                  </div>
                </div>
              </div>

              <div className="ui vertical divider">&amp;</div>

              <div className="account-2 column">
                <div id="account_2" className="field field-account">
                  <label>Account ID</label>
                  <input type="text" name="account_2" placeholder="Ethereum account id" />
                </div>

                <div className="field field-ether">
                  <p className="ui my-label">Initial amount of Ether</p>
                  <div className="ui right labeled input">
                    <input type="number" step="0.1" name="ether_2" placeholder="100" />
                    <div className="ui basic label">
                      ether
                    </div>
                  </div>
                </div>

                <div className="field field-share">
                  <p className="ui my-label">Share after divorce</p>
                  <div className="ui right labeled input">
                    <input id="share_2" className="share-value" type="number" name="share_2" min="0" max="100" />
                    <div className="ui basic label"> % </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="ui stackable one column grid">
              <h3>Divorce agreement</h3>
              <p className="ui radio checkbox read-only inline fields">
                <input type="radio" name="uniliteral" />
                <label>Uniliteral</label>
                <input type="radio" name="consensual" />
                <label>Consensual</label>
              </p>

              <p className="field">
                <button id="marriange-submit" className="ui button"  type="submit">Submit</button>
              </p>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
