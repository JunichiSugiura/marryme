// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"divornce","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"accept","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getPartners","outputs":[{"name":"wallet0","type":"address"},{"name":"initAmount0","type":"uint256"},{"name":"splitShare0","type":"uint256"},{"name":"wallet1","type":"address"},{"name":"initAmount1","type":"uint256"},{"name":"splitShare1","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_initAmount","type":"uint256"}],"name":"update","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_splitShare0","type":"uint256"},{"name":"_wallet1","type":"address"},{"name":"_initAmount1","type":"uint256"},{"name":"_splitShare1","type":"uint256"}],"name":"firstPayment","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "60606040526007805460ff191690556101c98061001c6000396000f3606060405260e060020a60003504631a1c646e81146100475780632852b71c1461004d57806373e29b0d1461007557806382ab890a146100bc578063d17b38331461010d575b005b6100455b565b60015461004590600160a060020a033381169116141561018557600254341461019357610002565b600154600454600554600254600354600654600160a060020a03958616606090815260809390935260a0919091529290931660c090815260e0919091526101009190915290f35b6001546100459060043590600160a060020a033381169116141561019857600454600554600160a060020a039190911690600090606082818181858883f150505060058390555050346002556101c6565b3360608190523460808190526004803560a08190526001805473ffffffffffffffffffffffffffffffffffffffff19908116909517905560029290925560039190915561012060405260243560c081905260443560e08190526064356101008190528354909416909117909155600555600655610045565b600554341461004b57610002565b61004b565b600154600254600160a060020a0390911690600090606082818181858883f150505060028390555050346005555b5056",
    unlinked_binary: "60606040526007805460ff191690556101c98061001c6000396000f3606060405260e060020a60003504631a1c646e81146100475780632852b71c1461004d57806373e29b0d1461007557806382ab890a146100bc578063d17b38331461010d575b005b6100455b565b60015461004590600160a060020a033381169116141561018557600254341461019357610002565b600154600454600554600254600354600654600160a060020a03958616606090815260809390935260a0919091529290931660c090815260e0919091526101009190915290f35b6001546100459060043590600160a060020a033381169116141561019857600454600554600160a060020a039190911690600090606082818181858883f150505060058390555050346002556101c6565b3360608190523460808190526004803560a08190526001805473ffffffffffffffffffffffffffffffffffffffff19908116909517905560029290925560039190915561012060405260243560c081905260443560e08190526064356101008190528354909416909117909155600555600655610045565b600554341461004b57610002565b61004b565b600154600254600160a060020a0390911690600090606082818181858883f150505060028390555050346005555b5056",
    address: "0xd64dc5cad3e1ffa6bd0cfc3fdb08c6d2458b3d0f",
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
