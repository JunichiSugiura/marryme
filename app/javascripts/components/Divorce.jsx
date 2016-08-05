import React, { Component } from 'react';

export default class Divorce extends Component {
  render() {
    return(
      <div className="row">
        <div className="ui two column middle aligned very relaxed stackable grid">
          <div className="column">
            <p><strong>Sick of it?</strong><br /> No problem. Your divorce is just on click away.</p>
            <div id="marriage-divorce" className="ui labeled button blue" tabIndex="0">
              <div className="ui blue button pointing">
                <i className="fork large icon"></i>
              </div>
              <button name="marriage-divorce" className="ui left label basic">
                Get divorced
              </button>
            </div>
          </div>

          <div className="account column">
            <img src="./images/divorce.png" />
          </div>
        </div>
      </div>
    );
  }
}
