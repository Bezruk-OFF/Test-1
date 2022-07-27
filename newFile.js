// 'use strict'

if (2 > 1) {
    function foo(a) {
        if (a < 10) {
            console.log('hello');
        }
    }
    foo(5);
}

let arr = [];
for (let i = 1; i <= 25; i++) {
    pages.push(i);
}

console.log(arr);

function get2dimensional(array, limit) {             // Делаем из array двумерный массив get2dimensional
    const result = [];
    for (var i = 0; i < array.length; i += limit) {
        result.push(array.slice(i, i + limit));
    }

    return result;
}