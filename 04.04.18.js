//Seek and Destroy
function destroyer(arr) {
    var i;
    var j;
    var arrLength = arr.length;
    for (i = 1; i < arguments.length; i += 1) {
        for (j = 0; j < arrLength; j += 1) {
            if (arguments[i] === arr[j]) {
                arr.splice(j, 1);
                j -= 1
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
    arr.sort(function (a, b) {
        return a - b;
    })
    for (i = 0; i < arr.length; i += 1) {
        if (num === arr[i]) {
            return i
        }
        if (num > arr[i] && num <= arr[i + 1]) {
            return i + 1
        }
        if (num > arr[arr.length - 1]) {
            return arr.length
        }
    }
}

getIndexToIns([40, 60], 50);
//End



//Sum All Numbers in a Range
function sumAll(arr) {
    var res = 0;
    var arrLength = arr.length;
    var ver = Math.min.apply(null, arr);
    if (ver === arr[0]) {
        for (ver; ver <= arr[1]; ver += 1) {
            res += ver
        }
    } else {
        for (ver = arr[1]; ver <= arr[0]; ver += 1) {
            res += ver
        }
    }
    return res;
}

sumAll([4, 1]);
