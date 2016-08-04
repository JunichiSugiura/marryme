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

  render() {
    const { proposal, updateAddress, updateInitAmount, updateSplitShare } = this.props;
    const { partners } = this.props.proposal;

    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
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
