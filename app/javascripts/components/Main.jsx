import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return(
      <div>
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
        </form>

        <br /><br />
        <div id="status-message-wrapper" className="ui warning message transition hidden">
          <div className="header">Status message</div>
          <p id="status"></p>
        </div>
      </div>
    );
  }
}
