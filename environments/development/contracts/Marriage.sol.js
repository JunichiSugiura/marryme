// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"accept","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"edit","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"spend","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getInitAmount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"divorce","outputs":[],"type":"function"},{"inputs":[{"name":"_wallet1","type":"address"},{"name":"_initAmount1","type":"uint256"}],"type":"constructor"}],
    binary: "606060408181528061019f833960a09052516080513360a08190523460c081905260008054600160a060020a0319908116909317905560015561012060405260e0839052610100829052600280549091168317905560038190556004805460ff19169055505061012c806100736000396000f3606060405260e060020a60003504632852b71c81146100475780633e21857d1461005257806345615bcc1461009c578063b5376cce146100a4578063dff44b2f1461009c575b005b6100456100eb6100a8565b6000546100459033600160a060020a03908116911614156100f65760008054604051600160a060020a0391821692913016319082818181858883f1505034600355506100e9915050565b6100456100e9565b6100c95b6000805433600160a060020a03908116911614156101245750600154610129565b60408051918252519081900360200190f35b6004805460ff191660011790555b565b34146100db57610002565b600254604051600160a060020a039182169160009130909116319082818181858883f1505034600155505050565b506003545b9056",
    unlinked_binary: "606060408181528061019f833960a09052516080513360a08190523460c081905260008054600160a060020a0319908116909317905560015561012060405260e0839052610100829052600280549091168317905560038190556004805460ff19169055505061012c806100736000396000f3606060405260e060020a60003504632852b71c81146100475780633e21857d1461005257806345615bcc1461009c578063b5376cce146100a4578063dff44b2f1461009c575b005b6100456100eb6100a8565b6000546100459033600160a060020a03908116911614156100f65760008054604051600160a060020a0391821692913016319082818181858883f1505034600355506100e9915050565b6100456100e9565b6100c95b6000805433600160a060020a03908116911614156101245750600154610129565b60408051918252519081900360200190f35b6004805460ff191660011790555b565b34146100db57610002565b600254604051600160a060020a039182169160009130909116319082818181858883f1505034600155505050565b506003545b9056",
    address: "0xc9d5e24e8511ea9815712d34f3dfb4edfd0dda59",
    generated_with: "2.0.9",
    contract_name: "Marriage"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Marriage error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Marriage error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Marriage error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Marriage error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Marriage = Contract;
  }

})();
