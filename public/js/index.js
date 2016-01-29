'use strict';

console.log('index.js!');

$(document).ready(init);
function init(){
  $('#userPageBtn').on('click', goToUserPage)
}

function goToUserPage(){
  $.get('/userpage')
  .done()
}
