//NOTE: This script depends upon stores.js being loaded before it

'use strict';

//Create a <th> header for sales table
var tbEl = document.getElementById('sales_table');
var thEl = document.createElement('th');
tbEl.appendChild(thEl);

for (var i = earlyHour; i < lateHour; i++) {
  thEl = document.createElement('th');
  thEl.textContent = hourToStd(i);
  tbEl.appendChild(thEl);
}

thEl = document.createElement('th');
thEl.textContent = 'Daily Total';
tbEl.appendChild(thEl);

//Fill sales table rows
for (var i = 0; i < arrStores.length; i++) {
  arrStores[i].genEstCookiesPerHour();
  arrStores[i].renderSalesRow();
}

//Totals rows
var trEl = document.createElement('tr');

//Create header for totals row
thEl = document.createElement('th');
thEl.textContent = 'All Stores: ';
trEl.appendChild(thEl);

//Fill totals row <td>'s
var tdEl;
for (var i = 0; i < lateHour - earlyHour; i++) {
  var totCookiesPerHour = 0;
  for (var j = 0; j < arrStores.length; j++) {
    totCookiesPerHour += arrStores[j].estCookiesPerHour[i][1];
  }

  tdEl = document.createElement('td');
  tdEl.textContent = totCookiesPerHour;
  trEl.appendChild(tdEl);
}

//Calculate the daily total for all stores and append to total's row as its last <td>
var totalCookies = 0;
for (var i = 0; i < arrStores.length; i++) totalCookies += arrStores[i].estTotalCookies;

tdEl = document.createElement('td');
tdEl.textContent = totalCookies;
trEl.appendChild(tdEl);

//Append totals row to sales table
tbEl.appendChild(trEl);
