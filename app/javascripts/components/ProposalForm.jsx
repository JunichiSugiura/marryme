import React, { Component } from 'react';

import PartnerForm from './PartnerForm';

export default class ProposalForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  handleOnChangeDivorceType(e) {
    const { updateDivorceType, i } = this.props;
    updateDivorceType({divorceType: e.target.id});
  }

  render() {
    const { proposal, updateAddress, updateInitAmount, updateSplitShare } = this.props;
    const { partners } = this.props.proposal;

    return(
      <form onSubmit={this.handleSubmit.bind(this)} className="ui form">
        <div className="ui two column middle aligned very relaxed stackable grid">
          {partners.map((partner, i) => {
            const andSign = i !== partners.length - 1 ?  <div>&amp;</div> : null;
            return(
              <PartnerForm
                key={i}
                partner={partner}
                needAndSign={i !== partners.length - 1}
                i={i}
                updateAddress={updateAddress}
                updateInitAmount={updateInitAmount}
                updateSplitShare={updateSplitShare} />
            );
          })}
        </div>

        <div>
          <div>
            <h3>Divorce agreement</h3>
            <div>
              <input
                type="radio"
                name="divorceType"
                id="uniliteral"
                onChange={this.handleOnChangeDivorceType.bind(this)} />
              <label htmlFor="uniliteral">Uniliteral</label>
              <input
                type="radio"
                name="divorceType"
                id="consensual"
                onChange={this.handleOnChangeDivorceType.bind(this)} />
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
