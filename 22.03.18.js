//Return Largest Numbers in Arrays
unction largestOfFour(arr) {
    var i;
    var arrLength = arr.length;
    var arrInArr;
    var res = [];
    var changed_array;
    for (i = 0; i < arrLength; i += 1) {
        arr[i].sort(function(a, b) {
                return a - b;
            });
            arrInArr=arr[i].slice(arr[i].length-1);
            changed_array = arrInArr.join(", ");
        res.push(+changed_array);
    }
    return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//finish first exercises

//Confirm the Ending
function confirmEnding(str, target) {
  var strArr = str.split(' ');
  var ver = strArr[strArr.length-1].length;
  var targetLength = target.length;
  if(strArr.length === 1){
     str = (str[str.length-1]===target)?true:false;
  }
  else{
    if(ver!==targetLength){
      strArr = strArr[strArr.length-1].substr(strArr.length, targetLength);
      str = (strArr===target)?true:false;
    }
    else{
      str = (strArr[strArr.length-1]===target)?true:false;
    }
  }
  return str; 
}

confirmEnding("Bastian", "n");
//finish second exercises


//числа Фибоначчи
const fibonachi = (num) => {
    var i = 0;
    var res = 1;
    var iter;
    var arr = [];
    var finalRes = 0;
    for (iter = 0; iter < num; iter += 1) {
        finalRes = i + res;
        res = i;
        i = finalRes;
        if (iter === 0) {
            res = 1;
        }
        arr.push(finalRes);
    }
    return arr;
    // console.log(finalRes + ' ' + '=' + ' ' + i + ' ' + '+' + ' ' + res);
}
fibonachi(7);
//1 = 0 + 1
//2 = 1 + 1
//3 = 2 + 1
//5 = 3 + 2
//8 = 5 + 3

//finish third exercises

//Сделайте функцию, которая считает и выводит количество своих вызовов
function getIter(num) {
    var currentCount = 1;
    for (var i = 0; i < num; i++) {
        function makeCounter() {
            return function () {
                return currentCount++;
            };
        }
        var counter = makeCounter();
        alert(counter());
    }
}
getIter(5);
//finish fourth exercises
