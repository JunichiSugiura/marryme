// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"accept","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"edit","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"spend","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"divorce","outputs":[],"type":"function"},{"inputs":[{"name":"_wallet1","type":"address"},{"name":"_initAmount1","type":"uint256"}],"type":"constructor"}],
    binary: "6060604081815280610118833960a09052516080513360a08190523460c081905260008054600160a060020a0319908116909317905560015561012060405260e083905261010082905260028054909116831790556003819055505060b0806100686000396000f3606060405260e060020a60003504632852b71c811460385780633e21857d14603d57806345615bcc146038578063dff44b2f146038575b005b60365b565b60005460369033600160a060020a039081169116141560835760008054600154600160a060020a039091169190606082818181858883f15050506001555034600355603b565b600254600354600160a060020a039190911690600090606082818181858883f1505050600355503460015556",
    unlinked_binary: "6060604081815280610118833960a09052516080513360a08190523460c081905260008054600160a060020a0319908116909317905560015561012060405260e083905261010082905260028054909116831790556003819055505060b0806100686000396000f3606060405260e060020a60003504632852b71c811460385780633e21857d14603d57806345615bcc146038578063dff44b2f146038575b005b60365b565b60005460369033600160a060020a039081169116141560835760008054600154600160a060020a039091169190606082818181858883f15050506001555034600355603b565b600254600354600160a060020a039190911690600090606082818181858883f1505050600355503460015556",
    address: "0xc69ede676d71cca84b42a513bc078c40b675c972",
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
