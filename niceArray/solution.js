'use strict';

function isNice(arr){
  if(arr.length < 2 ){
    return false;
  }
  for (var i = 0; i < arr.length; i++){
    var array = arr[i];
    if(!(arr.includes(array - 1) || arr.includes(array + 1))){
      return false;
    }
  }
  return true;
}

isNice([3,4,5,7]);