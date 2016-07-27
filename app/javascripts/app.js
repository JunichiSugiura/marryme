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


    // Do something in Submit.
    $(".button").click(function (e) {
      e.preventDefault();
      var id = $(e.currentTarget);

      console.log(e);

      console.log('clicked ' + id);

      if (id === 'submit') {
        getMarried();
      }



    });

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



