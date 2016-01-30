'use strict';

console.log('index.js!');

$(document).ready(init);
function init(){
  loggedInCheck()
  $('#userPageBtn').on('click', goToUserPage)
  $("#resetPassPage").on('click', viewPassReset)
  $('#splash').on('click', hideSplash)
}

function hideSplash(){
  $("#splash").hide();
}

function viewPassReset(){
    $.get('/changepass')
    .success(function(data) {
    })
    .fail(function(err) {
      alert('Error.  Check console.');
      console.log('err:', err);
    });
}

function goToUserPage(){
  $.get('/userpage')
  .done()
}

function loggedInCheck(){
  if(document.cookie === ''){
    $('.registerBtn, .loginBtn, #splash').show();
    $('.logoutBtn, .resetpassBtn, #userPageBtn').hide();
  }
  else{
    $('.registerBtn, .loginBtn, #splash').hide();
    $('.logoutBtn, .resetpassBtn').show();

  }
}
