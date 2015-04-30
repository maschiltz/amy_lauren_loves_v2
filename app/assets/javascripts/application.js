// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function () {
  var mobile = document.createElement('div');
  mobile.className = 'nav-mobile';
  document.querySelector('.nav').appendChild(mobile);

  var mobileNav = document.querySelector('.nav-mobile');
  var toggle = document.querySelector('.nav-list');
  mobileNav.onclick = function() {
    $(this).toggleClass('nav-mobile-open');
    $(toggle).toggleClass('nav-active');
  }
});

