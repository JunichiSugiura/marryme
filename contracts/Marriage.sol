contract Marriage {
  enum PhaseOptions {Proposed, Married, Divorced}

  struct Partner {
    address wallet;
    uint initAmount;
    uint splitShare;
  }

  address owner;

  Partner partner0;
  Partner partner1;

  PhaseOptions phase;

  function Marriage() {
    // owner = 0x0asf;
    phase = PhaseOptions.Proposed;
  }

  function firstPayment(uint _splitShare0, address _wallet1, uint _initAmount1, uint _splitShare1) public {
    partner0 = Partner({wallet: msg.sender, initAmount: msg.value, splitShare: _splitShare0});
    partner1 = Partner({wallet: _wallet1, initAmount: _initAmount1, splitShare: _splitShare1});
  }

  function getPartners() public returns (address wallet0, uint initAmount0, uint splitShare0, address wallet1, uint initAmount1, uint splitShare1) {
    wallet0 = partner0.wallet;
    initAmount0 = partner0.initAmount;
    splitShare0 = partner0.splitShare;

    wallet1 = partner1.wallet;
    initAmount1 = partner1.initAmount;
    splitShare1 = partner1.splitShare;
  }

  function update(uint _initAmount) public {
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

  function divornce() public {
    if(msg.sender == partner0.wallet) {
      partner0.wallet.send(this.balance * (partner0.splitShare / 100));
    } else {
      partner1.wallet.send(this.balance * (100 - partner0.splitShare / 100));
    }

    // suicide(owner);
  }
}
