'use strict';

//Data and objects
//*******************************************************************************************************************
//specific store data array
//array data is of the form [store location, opening hour in military time, closing hour in military time, minimum
//number of customers, maximum number of customers, average cookies per customer]
var arrStoreData = [  ['1st and Pike', 6, 20, 23, 65, 6.3],
                      ['SeaTac Airport', 6, 20, 3, 24, 1.2],
                      ['Seattle Center', 6, 20, 11, 38, 3.7],
                      ['Capitol Hill', 6, 20, 20, 38, 2.3],
                      ['Alki', 6, 20, 2, 16, 4.6] ];

//The earliest and latest store hours among all locations
var earlyHour = 6;
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
};

//Generates a random integer between min and max, inclusive
var random = function(min,max) {
  return Math.round(Math.random() * (max - min) + min);
};

//Store constructor function
//*******************************************************************************************************************
var Store = function(locale,hrOpen,hrClose,minCust,maxCust,cookiePerHr) {
  this.storeLocale = locale;
  this.hourOpen = hrOpen;
  this.hourClose = hrClose;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.cookiesPerCust = cookiePerHr;
  this.minToss = 2;
  this.custPerToss = 20;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.tossPerHour = [];
  this.totalCust = 0;
  this.totalCookies = 0;
}

//Store prototype methods
//*******************************************************************************************************************
//Simulates the number of customers for this store object for every hour of all stores' operations
//Uses that number of customers to build associated arrays for cookies sold per hour and tossers required per hour
Store.prototype.simCust = function() {
  //size and initialize arrays
  for (var i = 0; i < lateHour - earlyHour; ++i) {
    this.custPerHour.push(0);
    this.cookiesPerHour.push(0);
    this.tossPerHour.push(0);
  }
  //load applicable array elements
  for (var i = this.hourOpen - earlyHour; i < this.hourClose - earlyHour; ++i) {
    console.log(i);
    this.custPerHour[i] = random(this.minCustomers,this.maxCustomers);
    this.cookiesPerHour[i] = Math.ceil(this.custPerHour[i] * this.cookiesPerCust);
    this.tossPerHour[i] = Math.ceil(this.custPerHour[i] / this.tossPerCust);
    if (this.tossPerHour[i] < this.minToss) this.tossPerHour[i] = this.minToss;
    this.totalCust += this.custPerHour[i];
    this.totalCookies += this.cookiesPerHour[i];
  }
};

//Appends a row to table $tableId using elements in array $arr. Adds a header $addHead and final column $addLast if desired
Store.prototype.renderArrAsRow = function(arr,tableId,addHead,addLast) {
  var trEl = document.createElement('tr');

  //Create header column for row using addHead if applicable
  if (addHead) {
    var thEl = document.createElement('th');
    thEl.textContent = addHead;
    trEl.appendChild(thEl);
  }

  //Generate <td>'s for row
  for (var i = 0; i < arr.length; ++i) {
    var tdEl = document.createElement('td');
    tdEl.textContent = arr[i];
    trEl.appendChild(tdEl);
  }

  //Create ending column using addLast if applicable
  if (addLast) {
    var tdEl = document.createElement('td');
    tdEl.textContent = addLast;
    trEl.appendChild(tdEl);
  }

  document.getElementById(tableId).appendChild(trEl);
};

//Instantiate store objects and load them into array
//*******************************************************************************************************************
var arrStores = [];
for (var i = 0; i < arrStoreData.length; i++) {
  arrStores.push(new Store(arrStoreData[i][0], arrStoreData[i][1], arrStoreData[i][2], arrStoreData[i][3], arrStoreData[i][4], arrStoreData[i][5]));
  arrStores[i].simCust();
}

