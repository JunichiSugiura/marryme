import React, { Component } from 'react';

import Search from './Search';
import ProposalForm from './ProposalForm';
import Confirmation from './Confirmation';
import Divorce from './Divorce';
import Status from './Status';

export default class Main extends Component {
  render() {
    return(
      <div>
        <Search />
        <ProposalForm />
        <Confirmation />
        <Divorce />
        <Status />
      </div>
    );
  }
}
