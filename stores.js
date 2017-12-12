'use strict';

//specific store data
//*******************************************************************************************************************
var arrStoreData = [  ['1st and Pike', 6, 20, 23, 65, 6.3],
                  ['SeaTac Airport', 6, 20, 3, 24, 1.2],
                  ['Seattle Center', 6, 20, 11, 38, 3.7],
                  ['Capitol Hill', 6, 20, 20, 38, 2.3],
                  ['Alki', 6, 20, 2, 16, 4.6]
               ];


//store object properties
//*******************************************************************************************************************
function store(locale,hrOpen,hrClose,minCust,maxCust,cookiePerHr) {

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
//Generates a random value between minCustomers and maxCustomers, inclusive
store.prototype.genCustPerHour = function() {
    return Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
}

//Converts from military time to standard time
store.prototype.hourToStd = function(hour) {
    if (hour < 12) hour += 'am';
    else if (hour === 12) hour += 'pm';
    else {
      hour -= 12;
      hour += 'pm';
    }
    return hour;
}

//Uses genCustPerHour() to generate a random number of cookies sold for each hour of operation, then returns an array
//containing two elements. First element: a given hour of operation. Second element: the randomly generated number of
//cookies purchases for that hour
store.prototype.genEstCookiesPerHour = function() {
    for (var i = 0; i < this.hourClose - this.hourOpen; i++) {
      this.estCookiesPerHour.push([this.hourToStd(this.hourOpen + i), Math.round(this.genCustPerHour() * this.cookiesPerCust)]);
      this.estTotalCookies += this.estCookiesPerHour[i][1];
    }

    return this.estCookiesPerHour;
}

//Prints an unordered list to the first element tagged 'main' in the DOM. The UL is given a title of storeLocale,
//followed by a formatted version of the current values in the estCookiesPerHour array
store.prototype.printSales = function() {
    var ul = document.createElement('ul');
    var list = '';
    for (var i = 0; i < this.estCookiesPerHour.length; i++)
      list += '<li>' + this.estCookiesPerHour[i][0] + ': ' + this.estCookiesPerHour[i][1] + ' cookies</li>\n';
    ul.innerHTML = '<p class="ulp">' + this.storeLocale + '</p>\n' + list + '<li>Total: ' + this.estTotalCookies + ' cookies</li>';
    document.getElementsByTagName('main')[0].appendChild(ul);
}

//generate store objects and put them into array
//*******************************************************************************************************************
var arrStores = [];
for (var i = 0; i < arrStoreData.length; i++)
  arrStores.push(new store(arrStoreData[i][0], arrStoreData[i][1], arrStoreData[i][2], arrStoreData[i][3], arrStoreData[i][4], arrStoreData[i][5]));

console.log(arrStores);
