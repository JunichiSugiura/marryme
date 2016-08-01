import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// (function ($) {
//   'use strict';

//   var accounts;
//   var account;

//   $(document).ready(function () {
//     // Web3 is atomaticall included using truffle.
//     // console.log(web3, 'web3');


//     web3.eth.getAccounts(function (err, accs) {


//       if (err != null) {
//         alert("There was an error fetching your accounts.");
//         return;
//       }

//       if (accs.length == 0) {
//         alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
//         return;
//       }

//       accounts = accs;
//       account = accounts[0];

//       var default_account_metamask = web3.eth.defaultAccount;
//       $('input[name="account_1"]').val(default_account_metamask);

//     });


//     // Event Handlers.

//     // Do something in Submit form.
//     $("#marriange-submit").click(function (e) {
//       e.preventDefault();

//       // TODO Data validation.

//       var fields = [
//         'account_1',
//         'ether_1',
//         'share_1',
//         'account_2',
//         'ether_2',
//         'share_2'
//       ];

//       var data = {
//         account_1: '',
//         ether_1: '',
//         share_1: '',
//         account_2: '',
//         ether_2: '',
//         share_2: ''
//       };

//       // Basic validation.
//       // TODO More validation.
//       $(fields).each(function(index, field) {
//         var val = $('input[name=' + field + ']').val();
//         if (val !== '' || val === 'undefined') {
//           data[field] = val;
//         }
//         else {
//           $('#' + field).addClass('error');
//         }
//         console.log(field + ' (' + index + ')');
//       });

//       console.log(data, 'data@marriange-submit clicked');
//       getMarried(data);
//     });

//     // Do something in Submit marriage-confirm.
//     $("#marriage-confirm").click(function (e) {
//       e.preventDefault();
//       console.log('marriage-confirm clicked');
//     });

//     // Do something in Submit marriage-confirm.
//     $("#marriage-divorce").click(function (e) {
//       e.preventDefault();
//       console.log('marriage-divorce clicked');
//     });

//     // Do something in Submit marriage-confirm.
//     $("#search-marriage").on('submit', function (e) {
//       e.preventDefault();
//       e.stopPropagation();
//       var val = $("#search-marriage input").val();
//       if (val != '') {
//         searchMarriage(val);
//       }
//     });

//     $("#search-marriage .icon").on('click', function (e) {
//       var val = $("#search-marriage input").val();
//       if (val != '') {
//         searchMarriage(val);
//       }
//     });


//     // UI Functions

//     // Keep 100% in equal share.
//     $('input.share-value').on('change', function(e){
//       var elm = $(this);
//       if (elm.attr('id') === 'share_1') {
//         $('#share_2').val(100 - elm.val());
//       }
//       if (elm.attr('id') === 'share_2') {
//         $('#share_1').val(100 - elm.val());
//       }
//     });


//     $('.field-account input').on('change', function(e){
//       var elm = $(this);
//       elm.val(elm.val().toLowerCase());
//     });

//   });

//   // Logic Functions

//   // Search for a marriage by ID.
//   function searchMarriage(id) {
//     console.log(id, 'search-marriage submitted');

//     var contractInstance = ShareAccount.at(id);

//     console.log(contractInstance);

//     // TODO Check the status of the contract instance and show the form accordingly.

//     // getDivorved(contractInstance);

//     // confirmMarriage(contractInstance)

//   }

//   // Get divorced
//   function getDivorved(contractInstance) {
//    console.log(contractInstance, 'contractInstance@getDivorved');
//   }

//   // Confirm marriage
//   function confirmMarriage(contractInstance) {
//     console.log(contractInstance, 'contractInstance@confirmMarriage');
//   }


//   // Interact with Smart contract.
//   function getMarried(data) {

//     console.log(data, 'data@getMarried');

//     // Get the contract.
//     var marriage_contract = Marriage.deployed();



//     // Call getMarried in the Contract shareAccount
//     // @return promise


//     // var contractInstance = getMarried.new({data: '0x12345...', from: myAccount, gas: 1000000});


//     // Create new Instance of Marriage contract.
//     // firstPayment(uint _splitShare0, address _wallet1, uint _initAmount1, uint _splitShare1)

//     // 'account_1',
//     //     'ether_1',
//     //     'share_1',
//     //     'account_2',
//     //     'ether_2',
//     //     'share_2'
//     marriage_contract.firstPayment(data.share_1,
//                                   data.account_2,
//                                   data.ether_2,
//                                   data.share_2,
//                                   {from: accounts[0], gas: 3141592}).then(function (whatishere) {

//       console.log(whatishere);
//       // return marriage.status();

//     }).then(function (promise_return_value) {
//       debugger;

//       // Update HTML
//       setStatus(promise_return_value);

//     }).catch(function (e) {
//       console.log(e);
//       setStatus("Error getting balance; see log.");
//     });


//     // DEMO VERSION
//     // TODO DELETE this

//     // Call getMarried in the Contract shareAccount
//     // @return promise
//     // shareAccount.getMarried({from: accounts[0], gas: 3141592}).then(function () {
//     //
//     //   return marriage.status();
//     //
//     // }).then(function (promise_return_value) {
//     //
//     //   // Update HTML
//     //   setStatus(promise_return_value);
//     //
//     // }).catch(function (e) {
//     //   console.log(e);
//     //   setStatus("Error getting balance; see log.");
//     // });
//   }

//   // Helper: Update html in div[id=status]
//   function setStatus(message) {
//     $('#status').html(message).parent('.message').removeClass('hidden');
//   }

// })($);



