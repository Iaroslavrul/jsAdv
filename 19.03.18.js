//Первая задача (Вывести среднее арифметическое)
var arr = [12, 15, 20, 25, 59, 79];
var arrLength = arr.length;
var i;
var res = 0;
for (i = 0; i <= arrLength - 1; i += 1) {
    res += arr[i]
};
res = res / arrLength;
console.log(res);
//Конец первой задачи


//Вторая задача (Удалить из массива отрицательные числа, а от остальных вернуть корень квадратный)
var arr = [9, -15, 16, 25, -59, 81];
var arrLength = arr.length;
var i;
for (i = 0; i < arrLength - 1; i += 1) {
    if (arr[i] < 0) {
        arr.splice(i, 1);
        arrLength -= 1;
        i -= 1;
    } else {
        arr.splice(i, 1, Math.sqrt(arr[i]));
    }
}
console.log(arr);
//Конец второй задачи
