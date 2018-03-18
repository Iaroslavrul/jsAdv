//Title Case a Sentence Complete  (Каждая первая буква в слове - заглавная)
function titleCase(str) {
    var i;
    var j;
    var str = str.toLowerCase();
    var strArr = str.split(' ');
    var wordLength;
    var wordsArr;
    var res = '';
    for (i = 0; i < strArr.length; i += 1) {
        wordLength = strArr[i];
        wordsArr = wordLength.split('');
        wordsArr[0] = wordsArr[0].toUpperCase();
        wordsArr = wordsArr.join('');
        if (i !== 0) {
            res += ' ' + wordsArr;
        } else {
            res += wordsArr;
        }
    }
    return res;
}
titleCase("I'm a little tea pot");

//Конец задачи


//Find the Longest Word in a String (Нахождение самого длинного слова в строке и возвращение его длины)
function findLongestWord(str) {
    var strArr = str.split(' ');
    strArr.sort(function (a, b) {
        return a.length - b.length;
    });
    var res = strArr[strArr.length - 1];
    var resLen = res.length;
    return resLen;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
//Конец задачи
