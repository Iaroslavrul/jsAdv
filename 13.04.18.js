//Sorted Union
function uniteUnique(arr) {
  var i,
    globalArr = [],
    finalArr = [];
  for (i = 1; i < arguments.length; i += 1) {
    globalArr = arr.concat(arguments[i]);
    arr = globalArr;
  }
  while (globalArr.length !== 0) {
    var delElOfArr = globalArr.shift();
    if (finalArr.indexOf(delElOfArr) === -1) {
      finalArr.push(delElOfArr)
    }
  }
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//End

//Binary Agents
function binaryAgent(str) {
  var i,
    strToArr = str.split(' '),
    finalArr = [],
    for (i = 0; i < strToArr.length; i += 1) {
      finalArr.push(String.fromCharCode(parseInt(strToArr[i], 2)));
    }

  return finalArr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//End


// Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  var arr1Length = arr1.length;
  var arr2Length = arr2.length;
  var i;
  var j;
  for (i = 0; i < arr1Length; i += 1) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
    }
  }
  for (j = 0; j < arr2Length; j += 1) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j])
    }
  }
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//End