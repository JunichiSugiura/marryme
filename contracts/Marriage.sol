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

  function edit(uint _initAmount) public {
    if(partner0.wallet == msg.sender) {
      // return eth to last sender
      partner1.wallet.send(partner1.initAmount);

      // set new initAmount
      partner1.initAmount = _initAmount;
      partner0.initAmount = msg.value;
    } else {
      partner0.wallet.send(partner0.initAmount);

      partner0.initAmount = _initAmount;
      partner1.initAmount = msg.value;
    }
  }

  modifier onlyInitAmountIsPaid() {
    if(partner0.wallet == msg.sender) {
      if(msg.value != partner0.initAmount) {
        throw;
      }
    } else {
      if(msg.value != partner1.initAmount) {
        throw;
      }
    }
  }

  function accept() onlyInitAmountIsPaid() public {
    phase = PhaseOptions.Married;
  }

  function spend() public {

  }

  function divorce() public {

  }
}