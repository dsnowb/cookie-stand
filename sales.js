//NOTE: This script depends upon stores.js being loaded before it

'use strict';

//calculates the hourly totals for all stores' array $arr and optionally adds a total for all hourly totals by setting addSum
//returns the result as an array
var arrTotals = function(arr,addSum) {
  var arrTotals = [];
  var totDaily = 0;
  for (var i = 0; i < arrStoreHrs.length; ++i) {
    var totPerHour = 0;
    for (var j = 0; j < arrStores.length; ++j) totPerHour += arrStores[j][arr][i];
    arrTotals[i] = totPerHour;
    totDaily += totPerHour;
  }
  if (addSum) arrTotals.push(totDaily);

  return arrTotals;
};

//renders into a cookie sales table $tableId
var renderSalesTable = function(tableId) {
  renderArrAsHead(arrStoreHrs,tableId,' ','Totals');
  for (var i = 0; i < arrStores.length; ++i)
    renderArrAsRow(arrStores[i].cookiesPerHour,tableId,arrStores[i].storeLocale,arrStores[i].totalCookies);
  renderArrAsRow(arrTotals('cookiesPerHour',1), tableId,'Totals: ','');
};

//render into a tossers required per store per hour table $tableId
var renderTosserTable = function(tableId) {
  renderArrAsHead(arrStoreHrs,tableId,' ','');
  for (var i = 0; i < arrStores.length; ++i)
    renderArrAsRow(arrStores[i].tossPerHour,tableId,arrStores[i].storeLocale,'');
  renderArrAsRow(arrTotals('tossPerHour',0),tableId,'Totals:','');
};

renderSalesTable('sales_table');
renderTosserTable('tosser_table');
