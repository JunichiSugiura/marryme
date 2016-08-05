import React, { Component } from 'react';

import Search from './Search';
import ProposalForm from './ProposalForm';
import Confirmation from './Confirmation';
import Divorce from './Divorce';
import Status from './Status';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Search />
        <ProposalForm {...this.props} />
        <Confirmation />
        <Divorce />
        <Status />
      </div>
    );
  }
}
