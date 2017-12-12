//NOTE: This script depends upon stores.js being loaded before it

'use strict';

//Generates a random number of cookies purchased per hour of store operation, then prints that information for each location

//Create header for sales table
//need to turn tr into th without screwing up formatting. add tbody?
var thEl = document.createElement('tr');
var tdEl;
for (var i = earlyHour; i < lateHour; i++) {
  tdEl = document.createElement('td');
  tdEl.textContent = hourToStd(i);
  thEl.appendChild(tdEl);
}

tdEl = document.createElement('td');
tdEl.textContent = 'Daily Total';
thEl.appendChild(tdEl);

var tbEl = document.getElementById('sales_table');
tbEl.appendChild(thEl);

//Fill table rows
for (var i = 0; i < arrStores.length; i++) {
  arrStores[i].genEstCookiesPerHour();
  arrStores[i].renderSalesRow();
}

//Get totals for all stores for each hour
var trEl = document.createElement('tr');
for (var i = 0; i < lateHour - earlyHour; i++) {
  var totCookiesPerHour = 0;
  for (var j = 0; j < arrStores.length; j++) {
    totCookiesPerHour += arrStores[j].estCookiesPerHour[i][1];
  }

  tdEl = document.createElement('td');
  tdEl.textContent = totCookiesPerHour;
  trEl.appendChild(tdEl);
}

var totalCookies = 0;
for (var i = 0; i < arrStores.length; i++) totalCookies+=arrStores[i].estTotalCookies;

tdEl = document.createElement('td');
tdEl.textContent = totalCookies;
trEl.appendChild(tdEl);

tbEl.appendChild(trEl);
