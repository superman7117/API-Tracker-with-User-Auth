'use strict';

console.log('index.js!');

$(document).ready(init);
function init(){
  $(".luke").on('click', lukeTheme)
  $(".r2d2").on('click', r2d2Theme)
  $(".darth").on('click', darthTheme)
}


function lukeTheme(){
  $('.stats').empty()
  $('body').css({"background-image": "url('http://esq.h-cdn.co/assets/15/43/980x490/landscape-1445356666-star-wars-luke-skywalker-tatooine.jpg')"})
  $('.infobox').css({'background-color': 'rgba(102,255,0,.8)'})
  $.get('http://swapi.co/api/people/1/')
  .done(function(data){
    console.log(data)
    var name = data.name;
    var eyecolor = data.eye_color;
    var height =  data.height;
    var mass = data.mass;
    var hair = data.hair_color;
    var gender = data.gender;
    $('<div>').addClass('name').text("Name: "+name).appendTo(".stats")
    $('<div>').addClass('eyecolor').text("Eye color: "+eyecolor).appendTo(".stats")
    $('<div>').addClass('hair').text("Hair: "+hair).appendTo(".stats")
    $('<div>').addClass('height').text("Height: "+height).appendTo(".stats")
    $('<div>').addClass('mass').text("Mass: "+mass).appendTo(".stats")
    $('<div>').addClass('gender').text("Gender: "+gender).appendTo(".stats")
  })
  $.post
}
function r2d2Theme(){
  $('.stats').empty()
  $('body').css({"background-image": "url('http://cdn.phys.org/newman/gfx/news/hires/2015/1-howlonguntil.jpg')"})
  $('.infobox').css({'background-color': 'rgba(100,149,237,.8)'})
  $.get('http://swapi.co/api/people/3/')
  .done(function(data){console.log(data)
    var name = data.name;
    var eyecolor = data.eye_color;
    var height =  data.height;
    var mass = data.mass;
    var hair = data.hair_color;
    var gender = data.gender;
    $('<div>').addClass('name').text("Name: "+name).appendTo(".stats")
    $('<div>').addClass('eyecolor').text("Eye color: "+eyecolor).appendTo(".stats")
    $('<div>').addClass('hair').text("Hair: "+hair).appendTo(".stats")
    $('<div>').addClass('height').text("Height: "+height).appendTo(".stats")
    $('<div>').addClass('mass').text("Mass: "+mass).appendTo(".stats")
    $('<div>').addClass('gender').text("Gender: "+gender).appendTo(".stats")

  })

}
function darthTheme(){
  $('.stats').empty()
  $('body').css({"background-image": "url('http://vignette1.wikia.nocookie.net/starwars/images/f/f3/Vader_Force_chokes_Motti.png/revision/latest?cb=20140830161604')"})
  $('.infobox').css({'background-color': 'rgba(215,0,0,.8)'})
  $.get('http://swapi.co/api/people/4/')
  .done(function(data){console.log(data)
    var name = data.name;
    var eyecolor = data.eye_color;
    var height =  data.height;
    var mass = data.mass;
    var hair = data.hair_color;
    var gender = data.gender;
    $('<div>').addClass('name').text("Name: "+name).appendTo(".stats")
    $('<div>').addClass('eyecolor').text("Eye color: "+eyecolor).appendTo(".stats")
    $('<div>').addClass('hair').text("Hair: "+hair).appendTo(".stats")
    $('<div>').addClass('height').text("Height: "+height).appendTo(".stats")
    $('<div>').addClass('mass').text("Mass: "+mass).appendTo(".stats")
    $('<div>').addClass('gender').text("Gender: "+gender).appendTo(".stats")

  })

}
