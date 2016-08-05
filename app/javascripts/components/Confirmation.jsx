import React, { Component } from 'react';

export default class Confirmation extends Component {
  render() {
    return(
      <form id="form-marriage-actions" className="ui form">
        <input id="marriage-id" name="marriage-id" type="hidden" />
        <div className="row">
          <div className="ui two column middle aligned very relaxed stackable grid">
            <div className="account column">
              <img src="./images/confirm.png" />
            </div>

            <div className="account column">
              <p><strong>Yeah!</strong> Your marriage contract is in proposal state. You may confirm it or modify it and resend it to your potential partner for confirmation.</p>
              <div id="marriage-confirm" className="ui labeled button" tabIndex="0">
                <div className="ui red button right pointing">
                  <i className="heart icon"></i>
                </div>
                <button id="marriage-confirm" name="marriage-confirm" className="ui basic red label">
                  Confirm marriage contract
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
