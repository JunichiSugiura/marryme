import React, { Component } from 'react';

import PartnerForm from './PartnerForm';

export default class ProposalForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    console.log('submitted');
  }

  render() {
    const { partners } = this.props.proposal;

    return(
      <form id="form-getmarried" className="ui form" onSubmit={this.handleSubmit.bind(this)}>
        <div>
          {partners.map((partner, i) => {
            const andSign = i !== partners.length - 1 ?  <div>&amp;</div> : null;
            return(
              <PartnerForm key={i} partner={partner} needAndSign={i !== partners.length - 1} />
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
