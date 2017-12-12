'use strict';

//specific store data array
//array data is of the form [store location, opening hour in military time, closing hour in military time, minimum
//number of customers, maximum number of customers, average cookies per customer]
//*******************************************************************************************************************
var arrStoreData = [  ['1st and Pike', 6, 20, 23, 65, 6.3],
                      ['SeaTac Airport', 5, 20, 3, 24, 1.2],
                      ['Seattle Center', 6, 20, 11, 38, 3.7],
                      ['Capitol Hill', 6, 20, 20, 38, 2.3],
                      ['Alki', 6, 20, 2, 16, 4.6] ];

//The earliest and latest store hours among all locations
var earlyHour = 5;
var lateHour = 20;

//Global helper functions
//*******************************************************************************************************************
//Converts from military time to standard time
var hourToStd = function(hour) {
    if (hour < 12) hour += 'am';
    else if (hour === 12) hour += 'pm';
    else {
      hour -= 12;
      hour += 'pm';
    }
    return hour;
}

//Generates a random integer between min and max, inclusive
var random = function(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}

//store object properties
//*******************************************************************************************************************
function Store(locale,hrOpen,hrClose,minCust,maxCust,cookiePerHr) {

  this.storeLocale = locale;
  this.hourOpen = hrOpen;
  this.hourClose = hrClose;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.cookiesPerCust = cookiePerHr;
  this.estCookiesPerHour = [];
  this.estTotalCookies = 0;
}

//store object prototype methods
//*******************************************************************************************************************
//Uses genCustPerHour() to generate a random number of cookies sold for each hour of operation, fills the estCookiesPerHour
//array with two elements. First: a given hour of operation. Second: the randomly generated number of cookies purchases for
//that hour. Finally, it provides a total number of cookies purchased for the day.
Store.prototype.genEstCookiesPerHour = function() {
    for (var i = 0; i < lateHour-earlyHour; i++)
      this.estCookiesPerHour.push([earlyHour+i]);
    for (var i = 0; i < this.hourClose - this.hourOpen; i++) {
      this.estCookiesPerHour[this.hourOpen-earlyHour+i].push(Math.round(random(this.minCustomers,this.maxCustomers) * this.cookiesPerCust));
      this.estTotalCookies += this.estCookiesPerHour[this.hourOpen-earlyHour+i][1];
    }
}

//Prints an unordered list to the first element tagged 'main' in the DOM. The UL is given a title of storeLocale,
//followed by a formatted version of the current values in the estCookiesPerHour array
Store.prototype.renderSalesRow = function() {
    var trEl = document.createElement('tr');
    for (var i = 0; i < lateHour-earlyHour; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.estCookiesPerHour[i][1];
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.estTotalCookies;
    trEl.appendChild(tdEl);

    document.getElementById('sales_table').appendChild(trEl);
}

//generate store objects and put them into array for use by associated scripts
//*******************************************************************************************************************
var arrStores = [];
for (var i = 0; i < arrStoreData.length; i++)
  arrStores.push(new Store(arrStoreData[i][0], arrStoreData[i][1], arrStoreData[i][2], arrStoreData[i][3], arrStoreData[i][4], arrStoreData[i][5]));
