(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
* jalousie JavaScript plugin.
* (c) 2013-2017, happyCoda.
* MIT License.
* https://github.com/happyCoda/jalousie
*/

$.fn.jalousie = function (params) {
  var docFrag = document.createDocumentFragment(),
      $div = void 0,
      shutterNum = params.shutterNum || 10,
      $img = this.find('img'),
      imgWidth = $img.width(),
      imgHeight = $img.height(),
      $shutters = void 0;

  this.css({
    position: 'relative'
  });

  for (var i = 0; i < shutterNum; i += 1) {
    $div = $('<div/>', {
      class: 'shutter'
    }).css({
      position: 'absolute',
      width: 0,
      height: imgHeight,
      left: Math.ceil(i * (imgWidth / shutterNum)) + 'px',
      top: '0px',
      backgroundColor: params.shutterBgColor || 'rgb(255, 255, 255)'
    });
    docFrag.appendChild($div.get(0));
  }

  this.append($(docFrag));

  $shutters = $('.shutter');

  function runAnimation() {
    return $shutters.animate({ width: Math.ceil(imgWidth / shutterNum) + 'px' }, params.duration || 3000);
  }

  function hideElements() {
    if (params.hide) {
      $img.add($shutters).hide();
    }
  }

  $.when(runAnimation()).then(hideElements);
};

},{}]},{},[1]);
