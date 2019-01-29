"use strict";

var h = "hello";
var w = "world";

console.log(h + " " + w);

var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
console.log(multiply(43, 5));

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var suma = 0;
    args.forEach(function (arg) {
        return suma = arg + suma;
    });
    return suma / args.length;
};
console.log(average(5, 1, 5, 6));

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

var names = [1, 4, 'Iwona', false, 'Nowak'];
var third = names[2],
    fifth = names[4];

console.log(third + " " + fifth);
