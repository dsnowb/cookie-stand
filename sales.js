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

  genEstCookiesPerHour: function() {
    for (var i = 0; i <= this.hourClose - this.hourOpen; i++) {
      this.estCookiesPerHour.push([this.hourOpen+i, Math.round(this.genCustPerHour()*this.cookiesPerCust)]);
      if (this.hourOpen+i < 12) this.estCookiesPerHour[i][0]+='am';
      else if (this.hourOpen+i === 12) this.estCookiesPerHour[i][0]+='pm';
      else {
        this.estCookiesPerHour[i][0] -= 12;
        this.estCookiesPerHour[i][0] += 'pm';
      }
    }
      return this.estCookiesPerHour;
  },

  printAsUL: function() {
    var ul = document.createElement('ul');
    var list = '';
    for (var i = 0; i < this.estCookiesPerHour.length; i++)
      list += '<li>' + this.estCookiesPerHour[i][0] + ': ' + this.estCookiesPerHour[i][1] + ' cookies</li>\n';
    ul.innerHTML = '<p>' + this.storeLocale + '</p>\n' + list;
    document.getElementsByTagName('main')[0].appendChild(ul);
  }
  
}

store1.genEstCookiesPerHour();
store1.printAsUL();
