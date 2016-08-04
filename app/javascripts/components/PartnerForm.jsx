import React, { Component } from 'react';

export default class PartnerForm extends Component {
  constructor(props) {
    super(props);
  }

  handleOnChangeAddress(e) {
    this.props.updateAddress({i: this.props.i, address: e.target.value});
  }

  render() {
    const { i, partner, needAndSign } = this.props;
    const { address, initAmount, splitShare } = partner;
    const andSign = needAndSign ? <div>&amp;</div> : null;

    return(
      <div>
        <div>
          <label htmlFor={`wallet${i}`}>Wallet address</label>
          <input
            type="text"
            id={`wallet${i}`}
            placeholder="0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
            value={address}
            onChange={this.handleOnChangeAddress.bind(this)} />
        </div>

        <div>
          <label htmlFor={`initAmount${i}`}>Initial amount</label>
          <input type="number" step="0.001" id={`initAmount${i}`} placeholder="0.005" value={initAmount} />ETH
        </div>

        <div>
          <label htmlFor={`splitShare${i}`}>Share after divorce</label>
          <input type="number" id={`splitShare${i}`} min="0" max="100" value={splitShare} />%
        </div>

        {andSign}
      </div>
    );
  }
}
