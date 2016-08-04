import React, { Component } from 'react';

export default class PartnerForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { partner, needAndSign } = this.props;
    const { address, initAmount, splitShare } = partner;
    const andSign = needAndSign ? <div>&amp;</div> : null;

    return(
      <div>
        <div>
          <label htmlFor={`wallet${this.key}`}>Wallet Address</label>
          <input type="text" name={`wallet${this.key}`} placeholder="Wallet Address" value={address} />
        </div>

        <div>
          <lable htmlFor={`initAmount${this.key}`}>Initial amount</lable>
          <input type="number" step="0.001" name={`initAmount${this.key}`} placeholder="0.005" value={initAmount} />ETH
        </div>

        <div>
          <label htmlFor={`splitShare${this.key}`}>Share after divorce</label>
          <input type="number" name={`splitShare${this.key}`} min="0" max="100" value={splitShare} />%
        </div>

        {andSign}
      </div>
    );
  }
}
