/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marriage) {"use strict";

	(function ($) {
	  'use strict';

	  var accounts;
	  var account;

	  $(document).ready(function () {
	    // Web3 is atomaticall included using truffle.
	    // console.log(web3, 'web3');


	    web3.eth.getAccounts(function (err, accs) {

	      if (err != null) {
	        alert("There was an error fetching your accounts.");
	        return;
	      }

	      if (accs.length == 0) {
	        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
	        return;
	      }

	      accounts = accs;
	      account = accounts[0];

	      var default_account_metamask = web3.eth.defaultAccount;
	      $('input[name="account_1"]').val(default_account_metamask);
	    });

	    // Event Handlers.

	    // Do something in Submit form.
	    $("#marriange-submit").click(function (e) {
	      e.preventDefault();

	      // TODO Data validation.

	      var fields = ['account_1', 'ether_1', 'share_1', 'account_2', 'ether_2', 'share_2'];

	      var data = {
	        account_1: '',
	        ether_1: '',
	        share_1: '',
	        account_2: '',
	        ether_2: '',
	        share_2: ''
	      };

	      // Basic validation.
	      // TODO More validation.
	      $(fields).each(function (index, field) {
	        var val = $('input[name=' + field + ']').val();
	        if (val !== '' || val === 'undefined') {
	          data[field] = val;
	        } else {
	          $('#' + field).addClass('error');
	        }
	        console.log(field + ' (' + index + ')');
	      });

	      console.log(data, 'data@marriange-submit clicked');
	      getMarried(data);
	    });

	    // Do something in Submit marriage-confirm.
	    $("#marriage-confirm").click(function (e) {
	      e.preventDefault();
	      console.log('marriage-confirm clicked');
	    });

	    // Do something in Submit marriage-confirm.
	    $("#marriage-divorce").click(function (e) {
	      e.preventDefault();
	      console.log('marriage-divorce clicked');
	    });

	    // Do something in Submit marriage-confirm.
	    $("#search-marriage").on('submit', function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	      var val = $("#search-marriage input").val();
	      if (val != '') {
	        searchMarriage(val);
	      }
	    });

	    $("#search-marriage .icon").on('click', function (e) {
	      var val = $("#search-marriage input").val();
	      if (val != '') {
	        searchMarriage(val);
	      }
	    });

	    // UI Functions

	    // Keep 100% in equal share.
	    $('input.share-value').on('change', function (e) {
	      var elm = $(this);
	      if (elm.attr('id') === 'share_1') {
	        $('#share_2').val(100 - elm.val());
	      }
	      if (elm.attr('id') === 'share_2') {
	        $('#share_1').val(100 - elm.val());
	      }
	    });

	    $('.field-account input').on('change', function (e) {
	      var elm = $(this);
	      elm.val(elm.val().toLowerCase());
	    });
	  });

	  // Logic Functions

	  // Search for a marriage by ID.
	  function searchMarriage(id) {
	    console.log(id, 'search-marriage submitted');

	    var contractInstance = ShareAccount.at(id);

	    console.log(contractInstance);

	    // TODO Check the status of the contract instance and show the form accordingly.

	    // getDivorved(contractInstance);

	    // confirmMarriage(contractInstance)
	  }

	  // Get divorced
	  function getDivorved(contractInstance) {
	    console.log(contractInstance, 'contractInstance@getDivorved');
	  }

	  // Confirm marriage
	  function confirmMarriage(contractInstance) {
	    console.log(contractInstance, 'contractInstance@confirmMarriage');
	  }

	  // Interact with Smart contract.
	  function getMarried(data) {

	    console.log(data, 'data@getMarried');

	    // Get the contract.
	    var marriage_contract = Marriage.deployed();

	    // Call getMarried in the Contract shareAccount
	    // @return promise


	    // var contractInstance = getMarried.new({data: '0x12345...', from: myAccount, gas: 1000000});


	    // Create new Instance of Marriage contract.
	    // firstPayment(uint _splitShare0, address _wallet1, uint _initAmount1, uint _splitShare1)

	    // 'account_1',
	    //     'ether_1',
	    //     'share_1',
	    //     'account_2',
	    //     'ether_2',
	    //     'share_2'
	    marriage_contract.firstPayment(data.share_1, data.account_2, data.ether_2, data.share_2, { from: accounts[0], gas: 3141592 }).then(function (whatishere) {

	      console.log(whatishere);
	      // return marriage.status();
	    }).then(function (promise_return_value) {
	      debugger;

	      // Update HTML
	      setStatus(promise_return_value);
	    }).catch(function (e) {
	      console.log(e);
	      setStatus("Error getting balance; see log.");
	    });

	    // DEMO VERSION
	    // TODO DELETE this

	    // Call getMarried in the Contract shareAccount
	    // @return promise
	    // shareAccount.getMarried({from: accounts[0], gas: 3141592}).then(function () {
	    //
	    //   return marriage.status();
	    //
	    // }).then(function (promise_return_value) {
	    //
	    //   // Update HTML
	    //   setStatus(promise_return_value);
	    //
	    // }).catch(function (e) {
	    //   console.log(e);
	    //   setStatus("Error getting balance; see log.");
	    // });
	  }

	  // Helper: Update html in div[id=status]
	  function setStatus(message) {
	    $('#status').html(message).parent('.message').removeClass('hidden');
	  }
	})($);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	// Factory "morphs" into a Pudding class.
	// The reasoning is that calling load in each context
	// is cumbersome.

	(function () {

	  var contract_data = {
	    abi: [{ "constant": false, "inputs": [], "name": "divornce", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "accept", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "getPartners", "outputs": [{ "name": "wallet0", "type": "address" }, { "name": "initAmount0", "type": "uint256" }, { "name": "splitShare0", "type": "uint256" }, { "name": "wallet1", "type": "address" }, { "name": "initAmount1", "type": "uint256" }, { "name": "splitShare1", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_initAmount", "type": "uint256" }], "name": "update", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_splitShare0", "type": "uint256" }, { "name": "_wallet1", "type": "address" }, { "name": "_initAmount1", "type": "uint256" }, { "name": "_splitShare1", "type": "uint256" }], "name": "firstPayment", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }],
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

	  Contract.load = function (Pudding) {
	    Contract.Pudding = Pudding;

	    Pudding.whisk(contract_data, Contract);

	    // Return itself for backwards compatibility.
	    return Contract;
	  };

	  Contract.new = function () {
	    if (Contract.Pudding == null) {
	      throw new Error("Marriage error: Please call load() first before calling new().");
	    }

	    return Contract.Pudding.new.apply(Contract, arguments);
	  };

	  Contract.at = function () {
	    if (Contract.Pudding == null) {
	      throw new Error("Marriage error: Please call load() first before calling at().");
	    }

	    return Contract.Pudding.at.apply(Contract, arguments);
	  };

	  Contract.deployed = function () {
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

/***/ }
/******/ ]);