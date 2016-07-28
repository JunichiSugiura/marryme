contract Marriage {
  enum PhaseOptions {Proposed, Married, Divorced}

  struct Partner {
    address wallet;
    uint initAmount;
  }

  Partner partner0;
  Partner partner1;

  PhaseOptions phase;

  function Marriage(address _wallet1, uint _initAmount1) {
    partner0 = Partner({wallet: msg.sender, initAmount: msg.value});
    partner1 = Partner({wallet: _wallet1, initAmount: _initAmount1});

    phase = PhaseOptions.Proposed;
  }

  function edit() public {
    if(partner0.wallet == msg.sender) {
      partner0.wallet.send(this.balance);
      partner1.initAmount = msg.value;
    } else {
      partner1.wallet.send(this.balance);
      partner0.initAmount = msg.value;
    }
  }

  function accept() public {
    if(msg.value != getInitAmount()) {
      throw;
    }
    phase = PhaseOptions.Married;
  }

  function getInitAmount() returns(uint) {
    if(partner0.wallet == msg.sender) {
      return partner0.initAmount;
    } else {
      return partner1.initAmount;
    }
  }

  function spend() public {

  }

  function divorce() public {

  }
}