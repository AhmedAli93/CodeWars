'use strict'

function find_average(array) {
    var sum = 0;
    array.forEach(function(x){
      sum+=x;
    });
    return sum/array.length;
  }
  