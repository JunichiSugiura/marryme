// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"accept","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"spend","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"divorce","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_initAmount","type":"uint256"}],"name":"edit","outputs":[],"type":"function"},{"inputs":[{"name":"_wallet1","type":"address"},{"name":"_initAmount1","type":"uint256"}],"type":"constructor"}],
    binary: "6060604081815280610163833960a09052516080513360a08190523460c081905260008054600160a060020a0319908116909317905560015561012060405260e0839052610100829052600280549091168317905560038190556004805460ff19169055505060f1806100726000396000f3606060405260e060020a60003504632852b71c8114603857806345615bcc14605d578063dff44b2f14605d578063f6158485146062575b005b60005460369033600160a060020a039081169116141560af57600154341460bb576002565b60365b565b6036600435600054600160a060020a039081163391909116141560bf5760008054600154600160a060020a039091169190606082818181858883f1505050600183905550503460035560ee565b60035434146060576002565b6060565b600254600354600160a060020a039190911690600090606082818181858883f150505060038390555050346001555b5056",
    unlinked_binary: "6060604081815280610163833960a09052516080513360a08190523460c081905260008054600160a060020a0319908116909317905560015561012060405260e0839052610100829052600280549091168317905560038190556004805460ff19169055505060f1806100726000396000f3606060405260e060020a60003504632852b71c8114603857806345615bcc14605d578063dff44b2f14605d578063f6158485146062575b005b60005460369033600160a060020a039081169116141560af57600154341460bb576002565b60365b565b6036600435600054600160a060020a039081163391909116141560bf5760008054600154600160a060020a039091169190606082818181858883f1505050600183905550503460035560ee565b60035434146060576002565b6060565b600254600354600160a060020a039190911690600090606082818181858883f150505060038390555050346001555b5056",
    address: "0x04b8d10f31bbcd0ee604a01049791753c93eb962",
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
