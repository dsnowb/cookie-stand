'use strict';

var hourLoc = document.getElementsByClassName('hourLoc')[0];
for (var i = 0; i < arrStores.length; i++)
  hourLoc.innerHTML += '<li>' + arrStores[i].storeLocale + ': ' + arrStores[i].hourToStd(arrStores[i].hourOpen) + '-' + arrStores[i].hourToStd(arrStores[i].hourClose) + '</li>';
