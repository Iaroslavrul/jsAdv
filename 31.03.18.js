//Mutations 

function mutation(arr) {
  var firstArr = arr[0].toLowerCase().split('');
  var secondArr = arr[1].toLowerCase().split('');
  var i;
  for (i=0; i<secondArr.length; i+=1){
    if(firstArr.indexOf(secondArr[i])===-1){
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]);
//End


//Falsy Bouncer
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var  i;
  var filterArr = [];
  var arrLength = arr.length
  for(i=0; i<arrLength; i+=1){
    if(Boolean(arr[i])===true){
      filterArr.push(arr[i])
    }
  }
  return filterArr
}
bouncer([7, "ate", "", false, 9])
//End


//Seek and Destroy

function destroyer(arr) {
  var i;
  var j;
  var arrLength = arr.length;
  for (i=1; i<arguments.length; i+=1){
    for (j=0; j<arrLength; j+=1){
      if(arguments[i]===arr[j]){
        arr.splice(j, 1);
        j-=1
      }
    }
  }
  
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//End


//Where do I belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var i;
  var res;
  arr.sort(function(a, b){
    return a-b;
  })
  for(i=0; i<arr.length; i+=1){
    if(num===arr[i]){
      return i
    }
    if(num>arr[i] && num<=arr[i+1]){
      return i+1
    }
    if(num>arr[arr.length-1]){
      return arr.length
    }
  }
}

getIndexToIns([40, 60], 50);
//End


//Caesars Cipher 
function rot13(str) { // LBH QVQ VG!
  var i;
  var step = 13;
  var res;
  var codeArr = [];
  var codeChar;
  var iChar;
  for(i=0; i<str.length; i+=1){
    iChar = str.charCodeAt(i);
    if (iChar>=32 && iChar<=63){
      res = iChar
    }
    else if(iChar<=77){
      res = step + iChar
    } 
    
    else {
      res = iChar - step
    }
    codeChar = String.fromCharCode(res);
    codeArr.push(codeChar)
  }
  return codeArr.join('')
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
//End