'use strict';

console.log('index.js!');

$(document).ready(init);
function init(){
  loggedInCheck()
  $('#userPageBtn').on('click', goToUserPage)
  $("#resetPassPage").on('click', viewPassReset)

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
    $('.registerBtn, .loginBtn').show();
    $('.logoutBtn, .resetpassBtn, #userPageBtn').hide();
  }
  else{
    $('.registerBtn, .loginBtn').hide();
    $('.logoutBtn, .resetpassBtn').show();

  }
}
