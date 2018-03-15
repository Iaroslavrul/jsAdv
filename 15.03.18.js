//First
function reverseString(str) {
            var strLen = str.length - 1;
            var i;
            var res = '';
            for (i = strLen; i >= 0; i -= 1) {
                res += str[i];
            };
            return res;
        }
        reverseString("hello");
//End first


//Second
function factorialize(num) {
            if (num === 1 || num === 0) {
                return 1;
            } else {
                return num * factorialize(num - 1);
            }
        }
        factorialize(5);
//End second


//Third
function palindrome(str) {
            var convToStr = String(str);
            convToStr = convToStr.toLowerCase();
            convToStr = convToStr.replace();

            function reverseString(convToStr) {
                var strLen = convToStr.length - 1;
                var i;
                var res = '';
                for (i = strLen; i >= 0; i -= 1) {
                    res += convToStr[i];
                }
                return res;
            }
            if (convToStr === reverseString(convToStr)) {
                return true;
            } else {
                return false;
            }
        }
        palindrome("eye");
//End Third


//Fourth
function palindrome(str) {
            var convToStr = String(str);
            convToStr = convToStr.toLowerCase();
            convToStr = convToStr.replace(/[^A-Za-z0-9]/g, '');

            function reverseString(convToStr) {
                var strLen = convToStr.length - 1;
                var i;
                var res = '';
                for (i = strLen; i >= 0; i -= 1) {
                    res += convToStr[i];
                }
                return res;
            }
            if (convToStr === reverseString(convToStr)) {
                return true;
            } else {
                return false;
            }
        }
        palindrome("eye");
//End Fourth


//Fifth
//Выдает ошибку, ве верно выводит значение длыны самого длинного слова
function findLongestWord(str) {
            var strArr = str.split(' ');
            strArr.sort(function(a, b) {
                return a.length - b.length;
            });
            var res = strArr.length - 1;
            var resLen = strArr[res];
            resLen = resLen.length;
            return resLen;
        }

        findLongestWord("The quick brown fox jumped over the lazy dog");
//End Fifth