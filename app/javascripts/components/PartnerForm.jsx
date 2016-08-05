import React, { Component } from 'react';

export default class PartnerForm extends Component {
  constructor(props) {
    super(props);
  }

  handleOnChangeAddress(e) {
    const { updateAddress, i} = this.props;
    updateAddress({i: i, address: e.target.value});
  }

  handleOnChangeInitAmount(e) {
    const { updateInitAmount, i } = this.props;
    updateInitAmount({i: i, initAmount: e.target.value});
  }

  handleOnChangeSplitShare(e) {
    const { updateSplitShare, i } = this.props;
    updateSplitShare({i: i, splitShare: e.target.value});
  }

  render() {
    const { i, partner, needAndSign } = this.props;
    const { address, initAmount, splitShare } = partner;
    const andSign = needAndSign ? <div>&amp;</div> : null;

    return(
      <div className="column">
        <div>
          <div>
            <label htmlFor={`wallet${i}`}>Wallet address</label>
          </div>
          <input
            type="text"
            id={`wallet${i}`}
            placeholder="0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
            value={address}
            onChange={this.handleOnChangeAddress.bind(this)} />
        </div>

        <div>
          <div>
            <label htmlFor={`initAmount${i}`}>Initial amount</label>
          </div>
          <div className="ui right labeled input">
            <input
              type="number"
              step="0.001"
              id={`initAmount${i}`}
              placeholder="0.005"
              value={initAmount}
              onChange={this.handleOnChangeInitAmount.bind(this)} />
            <div className="ui basic label right">ETH</div>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor={`splitShare${i}`}>Share after divorce</label>
          </div>
          <div className="ui right labeled input">
            <input
              type="number"
              id={`splitShare${i}`}
              min="0"
              max="100"
              value={splitShare}
              onChange={this.handleOnChangeSplitShare.bind(this)} />
            <div className="ui basic label right">%</div>
          </div>
        </div>

        {andSign}
      </div>
    );
  }
}
