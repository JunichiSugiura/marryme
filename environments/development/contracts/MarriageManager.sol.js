// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"inputs":[{"name":"_owner","type":"address"},{"name":"_value","type":"uint256"}],"type":"constructor"}],
    binary: "606060408181528060ae833960a090525160805160018054808201825560009081526020818152604080832060028186019081553360a08190523460c08190528680528386528487208054600160a060020a03199081169093178155880155610120845260e08990526101008890528686528386208054909116891781558601879055855480870187558552928490529220905492019190915550505060068060a86000396000f3606060405200",
    unlinked_binary: "606060408181528060ae833960a090525160805160018054808201825560009081526020818152604080832060028186019081553360a08190523460c08190528680528386528487208054600160a060020a03199081169093178155880155610120845260e08990526101008890528686528386208054909116891781558601879055855480870187558552928490529220905492019190915550505060068060a86000396000f3606060405200",
    address: "0xae9ac36f6523319324da178189e244197e0b2599",
    generated_with: "2.0.9",
    contract_name: "MarriageManager"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("MarriageManager error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("MarriageManager error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("MarriageManager error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("MarriageManager error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.MarriageManager = Contract;
  }

})();
