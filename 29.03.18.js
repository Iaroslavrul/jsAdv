//4. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'
const haveDouble = (arr) => {
    var i;
    var arrLength = arr.length;
    for (i = 1; i < arrLength; i += 1) {
        if (arr[i] === arr[i - 1]) {
            return console.log('Да')
        }
    }
    return console.log('Нет')
}
haveDouble([24, 11, 12, 12, 15]);
//End


//5. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
const getDigitsSum = (num) => {
    var num = String(Math.round(num));
    var numArr = num.split('');
    var numArrLength = numArr.length;
    var i;
    var res = 0;
    for (i = 0; i < numArrLength; i += 1) {
        res += Number(numArr[i])
    }
    return res
}
getDigitsSum(345);
//End


//3. Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul)

function addNewLi() {
    var ul = document.querySelector('#ul');
    li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = 'Пункт';
}
var btn = document.querySelector('button');
btn.addEventListener('click', addNewLi);

function addExclamation(event) {
    var target = event.target;
    target.appendChild(document.createTextNode('!'));
}
var ul = document.querySelector('#ul');
ul.addEventListener('click', addExclamation);
//End



//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var i=0;
  var keepArr;
  var finalArr = [];
  while(arr.length!==0){
    keepArr = arr.splice(i, size);
    finalArr.push(keepArr);
  }
  return finalArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//End


//Slasher Flick
function slasher(arr, howMany) {
  var res = [];
  if(howMany>arr.length){
    return res
  } else{
    arr.splice(0, howMany)
  }
  return arr
}

slasher([1, 2, 3], 2);
//End