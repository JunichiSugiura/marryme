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

    });


    // Event Handlers.

    // Do something in Submit form.
    $("#marriange-submit").click(function (e) {
      e.preventDefault();
      console.log('marriange-submit clicked');
      getMarried();
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
    $('input.share-value').on('change', function(e){
      var elm = $(this);
      if (elm.attr('id') === 'share_1') {
        $('#share_2').val(100 - elm.val());
      }
      if (elm.attr('id') === 'share_2') {
        $('#share_1').val(100 - elm.val());
      }
    });

  });

  // Logic Functions

  // Search for a marriage by ID.
  function searchMarriage(id) {
    console.log(id, 'search-marriage submitted');

    var contractInstance = ShareAccount.at(id);
    
    console.log(contractInstance);

  }



  // Interact with Smart contract.
  function getMarried() {

    // Get the contract.
    var shareAccount = ShareAccount.deployed();

    // Call getMarried in the Contract shareAccount
    // @return promise
    shareAccount.getMarried({from: accounts[0], gas: 3141592}).then(function () {

      return shareAccount.status();

    }).then(function (promise_return_value) {

      // Update HTML
      setStatus(promise_return_value);

    }).catch(function (e) {
      console.log(e);
      setStatus("Error getting balance; see log.");
    });
  }

  // Helper: Update html in div[id=status]
  function setStatus(message) {
    $('#status').html(message).parent('.message').removeClass('hidden');
  }

})($);



