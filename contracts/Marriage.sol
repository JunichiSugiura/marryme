contract Marriage {
  struct Partner {
    address wallet;
    uint initAmount;
  }

  Partner partner0;
  Partner partner1;

  function Marriage(address _wallet1, uint _initAmount1) {
    partner0 = Partner({wallet: msg.sender, initAmount: msg.value});
    partner1 = Partner({wallet: _wallet1, initAmount: _initAmount1});
  }

  function edit() public {
    if(partner0.wallet == msg.sender) {
      partner0.wallet.send(partner0.initAmount);
      partner0.initAmount = 0;

      partner1.initAmount = msg.value;
    } else {
      partner1.wallet.send(partner1.initAmount);
      partner1.initAmount = 0;

      partner0.initAmount = msg.value;
    }
  }

  function accept() public {

  }

  function spend() public {

  }

  function divorce() public {

  }
}