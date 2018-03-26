//Repeat a string repeat a string 
function repeatStringNumTimes(str, num) {
    // repeat after me
    var res = '';
    var i;
    if (num < 0) {
        return res;
    } else {
        for (i = 0; i < num; i += 1) {
            res += str;
        }
        return res;
    }
}

repeatStringNumTimes("abc", 3);
//End

//Truncate a string
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else if (num <= 3) {
        str = str.slice(0, num) + '...';
        return str;
    } else if (num > 3) {
        str = str.slice(0, num - 3) + '...';
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
//End

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var i = 0;
    var keepArr;
    var finalArr = [];
    while (arr.length !== 0) {
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
    if (howMany > arr.length) {
        return res
    } else {
        arr.splice(0, howMany)
    }
    return arr
}

slasher([1, 2, 3], 2);
//End

//Mutations
function mutation(arr) {
    var firstArr = arr[0].toLowerCase().split('');
    var secondArr = arr[1].toLowerCase().split('');
    var i;
    for (i = 0; i < secondArr.length; i += 1) {
        if (firstArr.indexOf(secondArr[i]) === -1) {
            return false
        }
    }
    return true
}

mutation(["hello", "hey"]);
//End


//Дополнительная задача №1
function clickBtn() {
    var form = document.querySelector('form');
    var input = document.createElement('input');
    form.appendChild(input);
}
//End


//Дополнительная задача №2
for (var i = 0; i < arr.length; i += 1) {
    var li = document.createElement('li');
    ul.appendChild(li);
    li.className = 'ulElem'.cloneNode(true);
    li.appendChild(document.createTextNode(arr[i]));
}

document.body.appendChild(ul);
//End



//Дополнительная задача №3
const isNegative = (arr) => {
    var i;
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] < 0) {
            return true
        }
    }
    return false
}
isNegative([1, 2, 3]);


var arr = [1, 2, 3, 4];
var ul = document.createElement('ul').className = 'ulElem';
//End
