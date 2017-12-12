//NOTE: This script depends upon stores.js being loaded before it

'use strict';

//Generates a random number of cookies purchased per hour of store operation, then prints that information for each location
for (var i = 0; i < arrStores.length; i++) {
  arrStores[i].genEstCookiesPerHour();
  arrStores[i].printAsUL();
}
