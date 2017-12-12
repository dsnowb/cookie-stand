'use strict';

//Stores as object literals
//{{{
var store1 = {

  //member data
  storeLocale: '1st and Pike',
  hourOpen: 6,
  hourClose: 20,
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerCust: 6.3,
  estCookiesPerHour: [],

  //methods
  genCustPerHour: function() {
    return Math.round(Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers);
  },

  hourToStd: function(hour) {
    if (hour < 12) hour+='am';
    else if (hour === 12) hour +='pm';
    else {
      hour -= 12;
      hour += 'pm';
    }
    return hour;
  },

  genEstCookiesPerHour: function() {
    for (var i = 0; i <= this.hourClose - this.hourOpen; i++)
      this.estCookiesPerHour.push([this.hourToStd(this.hourOpen+i), Math.round(this.genCustPerHour()*this.cookiesPerCust)]);

    return this.estCookiesPerHour;
  },

  printSales: function() {
    var ul = document.createElement('ul');
    var list = '';
    for (var i = 0; i < this.estCookiesPerHour.length; i++)
      list += '<li>' + this.estCookiesPerHour[i][0] + ': ' + this.estCookiesPerHour[i][1] + ' cookies</li>\n';
    ul.innerHTML = '<p class="ulp">' + this.storeLocale + '</p>\n' + list;
    document.getElementsByTagName('main')[0].appendChild(ul);
  }
}

var store2 = {

  //member data
  storeLocale: 'SeaTac Airport',
  hourOpen: 6,
  hourClose: 20,
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPerCust: 1.2,
  estCookiesPerHour: [],

  //methods
  genCustPerHour: function() {
    return Math.round(Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers);
  },

  hourToStd: function(hour) {
    if (hour < 12) hour+='am';
    else if (hour === 12) hour +='pm';
    else {
      hour -= 12;
      hour += 'pm';
    }
    return hour;
  },

  genEstCookiesPerHour: function() {
    for (var i = 0; i <= this.hourClose - this.hourOpen; i++)
      this.estCookiesPerHour.push([this.hourToStd(this.hourOpen+i), Math.round(this.genCustPerHour()*this.cookiesPerCust)]);

    return this.estCookiesPerHour;
  },

  printSales: function() {
    var ul = document.createElement('ul');
    var list = '';
    for (var i = 0; i < this.estCookiesPerHour.length; i++)
      list += '<li>' + this.estCookiesPerHour[i][0] + ': ' + this.estCookiesPerHour[i][1] + ' cookies</li>\n';
    ul.innerHTML = '<p class="ulp">' + this.storeLocale + '</p>\n' + list;
    document.getElementsByTagName('main')[0].appendChild(ul);
  }
}

var store3 = {

  //member data
  storeLocale: 'Seattle Center',
  hourOpen: 6,
  hourClose: 20,
  minCustomers: 11,
  maxCustomers: 38,
  cookiesPerCust: 3.7,
  estCookiesPerHour: [],

  //methods
  genCustPerHour: function() {
    return Math.round(Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers);
  },

  hourToStd: function(hour) {
    if (hour < 12) hour+='am';
    else if (hour === 12) hour +='pm';
    else {
      hour -= 12;
      hour += 'pm';
    }
    return hour;
  },

  genEstCookiesPerHour: function() {
    for (var i = 0; i <= this.hourClose - this.hourOpen; i++)
      this.estCookiesPerHour.push([this.hourToStd(this.hourOpen+i), Math.round(this.genCustPerHour()*this.cookiesPerCust)]);

    return this.estCookiesPerHour;
  },

  printSales: function() {
    var ul = document.createElement('ul');
    var list = '';
    for (var i = 0; i < this.estCookiesPerHour.length; i++)
      list += '<li>' + this.estCookiesPerHour[i][0] + ': ' + this.estCookiesPerHour[i][1] + ' cookies</li>\n';
    ul.innerHTML = '<p class="ulp">' + this.storeLocale + '</p>\n' + list;
    document.getElementsByTagName('main')[0].appendChild(ul);
  }
}

var store4 = {

  //member data
  storeLocale: 'Capitol Hill',
  hourOpen: 6,
  hourClose: 20,
  minCustomers: 20,
  maxCustomers: 38,
  cookiesPerCust: 2.3,
  estCookiesPerHour: [],

  //methods
  genCustPerHour: function() {
    return Math.round(Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers);
  },

  hourToStd: function(hour) {
    if (hour < 12) hour+='am';
    else if (hour === 12) hour +='pm';
    else {
      hour -= 12;
      hour += 'pm';
    }
    return hour;
  },

  genEstCookiesPerHour: function() {
    for (var i = 0; i <= this.hourClose - this.hourOpen; i++)
      this.estCookiesPerHour.push([this.hourToStd(this.hourOpen+i), Math.round(this.genCustPerHour()*this.cookiesPerCust)]);

    return this.estCookiesPerHour;
  },

  printSales: function() {
    var ul = document.createElement('ul');
    var list = '';
    for (var i = 0; i < this.estCookiesPerHour.length; i++)
      list += '<li>' + this.estCookiesPerHour[i][0] + ': ' + this.estCookiesPerHour[i][1] + ' cookies</li>\n';
    ul.innerHTML = '<p class="ulp">' + this.storeLocale + '</p>\n' + list;
    document.getElementsByTagName('main')[0].appendChild(ul);
  }
}

var store5 = {

  //member data
  storeLocale: 'Alki',
  hourOpen: 6,
  hourClose: 20,
  minCustomers: 2,
  maxCustomers: 16,
  cookiesPerCust: 4.6,
  estCookiesPerHour: [],

  //methods
  genCustPerHour: function() {
    return Math.round(Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers);
  },

  hourToStd: function(hour) {
    if (hour < 12) hour+='am';
    else if (hour === 12) hour +='pm';
    else {
      hour -= 12;
      hour += 'pm';
    }
    return hour;
  },

  genEstCookiesPerHour: function() {
    for (var i = 0; i <= this.hourClose - this.hourOpen; i++)
      this.estCookiesPerHour.push([this.hourToStd(this.hourOpen+i), Math.round(this.genCustPerHour()*this.cookiesPerCust)]);

    return this.estCookiesPerHour;
  },

  printSales: function() {
    var ul = document.createElement('ul');
    var list = '';
    for (var i = 0; i < this.estCookiesPerHour.length; i++)
      list += '<li>' + this.estCookiesPerHour[i][0] + ': ' + this.estCookiesPerHour[i][1] + ' cookies</li>\n';
    ul.innerHTML = '<p class="ulp">' + this.storeLocale + '</p>\n' + list;
    document.getElementsByTagName('main')[0].appendChild(ul);
  }
}
//}}}

var arrStores = [store1, store2, store3, store4, store5];
