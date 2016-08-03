import React, { Component } from 'react';

export default class ProposalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marriage: {}
    };
  }

  render() {
    return(
      <form id="form-getmarried" className="ui form">
        <div>
          <div>
            <div>
              <label htmlFor="wallet0">Wallet Address</label>
              <input type="text" name="wallet0" placeholder="Wallet Address1" />
            </div>

            <div>
              <lable htmlFor="initAmount0">Initial amount</lable>
              <input type="number" step="0.001" name="initAmount0" placeholder="0.005" />ETH
            </div>

            <div>
              <label htmlFor="splitShare0">Share after divorce</label>
              <input type="number" name="splitShare0" min="0" max="100" />%
            </div>
          </div>

          <div>&amp;</div>

          <div>
            <div>
              <label htmlFor="wallet1">Wallet Address</label>
              <input type="text" name="wallet1" placeholder="Wallet Address" />
            </div>

            <div>
              <lable htmlFor="initAmount1">Initial amount</lable>
              <input type="number" step="0.001" name="initAmount1" placeholder="0.005" />ETH
            </div>

            <div>
              <label htmlFor="splitShare1">Share after divorce</label>
              <input type="number" name="splitShare1" min="0" max="100" />%
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Divorce agreement</h3>
            <div>
              <input type="radio" name="uniliteral" />
              <label htmlFor="uniliteral">Uniliteral</label>
              <input type="radio" name="consensual" />
              <label htmlFor="consensual">Consensual</label>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
