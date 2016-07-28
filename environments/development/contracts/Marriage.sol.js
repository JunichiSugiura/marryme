// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"accept","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"spend","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getInitAmount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"divorce","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_initAmount","type":"uint256"}],"name":"edit","outputs":[],"type":"function"},{"inputs":[{"name":"_wallet1","type":"address"},{"name":"_initAmount1","type":"uint256"}],"type":"constructor"}],
    binary: "60606040818152806101ac833960a09052516080513360a08190523460c081905260008054600160a060020a0319908116909317905560015561012060405260e0839052610100829052600280549091168317905560038190556004805460ff191690555050610139806100736000396000f3606060405260e060020a60003504632852b71c811461004757806345615bcc14610052578063b5376cce1461005a578063dff44b2f14610052578063f61584851461007f575b005b6100456100fa61005e565b6100456100f8565b6100d05b6000805433600160a060020a03908116911614156100e257506001546100e7565b610045600435600054600160a060020a03908116339190911614156101055760008054600154604051600160a060020a03909216929182818181858883f15050506001839055505034600355610136565b60408051918252519081900360200190f35b506003545b90565b6004805460ff191660011790555b565b34146100ea57610002565b600254600354604051600160a060020a0392909216916000919082818181858883f150505060038390555050346001555b5056",
    unlinked_binary: "60606040818152806101ac833960a09052516080513360a08190523460c081905260008054600160a060020a0319908116909317905560015561012060405260e0839052610100829052600280549091168317905560038190556004805460ff191690555050610139806100736000396000f3606060405260e060020a60003504632852b71c811461004757806345615bcc14610052578063b5376cce1461005a578063dff44b2f14610052578063f61584851461007f575b005b6100456100fa61005e565b6100456100f8565b6100d05b6000805433600160a060020a03908116911614156100e257506001546100e7565b610045600435600054600160a060020a03908116339190911614156101055760008054600154604051600160a060020a03909216929182818181858883f15050506001839055505034600355610136565b60408051918252519081900360200190f35b506003545b90565b6004805460ff191660011790555b565b34146100ea57610002565b600254600354604051600160a060020a0392909216916000919082818181858883f150505060038390555050346001555b5056",
    address: "0xdc4872876bbefae3075d9ae8c96ff358948c1a2f",
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
