'use strict'

function cubeOdd(arr) {
  var total = 0;

  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'string') return undefined;  
    total += (arr[i] % 2) ? Math.pow(arr[i], 3) : 0;
  }

  return total;
}