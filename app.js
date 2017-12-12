//NOTE: This script depends on stores.js being loaded before it.

'use strict';

//Looks for an element with class 'hourLoc' and prints into it a series of <li>'s consisting of a store location and its respective hours
var hourLoc = document.getElementsByClassName('hourLoc')[0];
for (var i = 0; i < arrStores.length; i++)
  hourLoc.innerHTML += '<li>' + arrStores[i].storeLocale + ': ' + hourToStd(arrStores[i].hourOpen) + '-' + hourToStd(arrStores[i].hourClose) + '</li>';
