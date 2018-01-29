function solution(str){
    let strr='';
    for (let i = 0; i < str.length; i++) strr+=str.charAt(str.length - i - 1);
    return strr;
  }

  solution('world');