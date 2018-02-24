// // Array Steamroller
// // Flatten a nested array. You must account for varying
// //  levels of nesting.
// // function steamrollArray(arr) {
// //   // I'm a steamroller, baby
// //   return arr;
// // }
// // steamrollArray([1, [2], [3, [[4]]]]);
// // // prints out:
// // [1,2,3,4]

// function steamrollArray(arr) {
//     var newArr = [];
//     for (var x of arr) {
//         if (typeof x === 'number') {
//             newArr.push(x);
//         } else
//         if (x.length > 1) {
//             x.forEach( function(a) { newArr.push(a)})
//         } else { newArr.push(x[0])}
//     }


//     // checking if all of them are numbers
//     for (var y of newArr) {
//         if (typeof y !== 'number') {
//             newArr = steamrollArray(newArr);
//         }
//     }
//     return newArr;

// }

// console.log(steamrollArray( [1, [2], [3, [[4]] ] ] ));
// console.log(steamrollArray( [1, [2], [3, [[[4]], [5]] ] ] ));

//################# better solution

// var newArr = [];

// function steamrollArray(arr) {
//     for (var x of arr) {
//         if (typeof x === 'number') {
//             newArr.push(x);
//         } else {
//             steamrollArray(x);
//         }
//     }
// }

// steamrollArray([1, [2], [3, [[[4]], [5]] ] ] );
// console.log(newArr);

//######### inside 1 function



function steamrollArray(arr) {
    var newArr = [];

    function steam(arr) {
        for (var x of arr) {
            if (typeof x === 'number') {
                newArr.push(x);
            } else {
                steam(x);
            }
        }
    }
    steam(arr)
    return newArr;
}

console.log(steamrollArray([1, [2], [3, [[[4]], [5]] ] ] ));



///////////########################################################
// Finders Keepers - higher order functions
// Write a function that accepts two parameters 
// (you may add a third to differentiate type). 
// The first is an array, and the second is a function.
//  The function should look through the array for the 
//  first thing that matches the condition of the function
//   passed. If a match is not found, return false.

// Test at least these:

// findElement([1,3,5,8,9,10], function(num){
//     return num % 2 === 0})
// Return 8
// findElement([1,3,5,9], function(num){
//     reutrn num % 2 === 0})
// Return false
// findElement['Jim','Indian','Marsh','Glitch'],
//  function(str){reutrn str.indexOf('itch) !== -1})

var findElement = function(arr, fun) {
    for (var x of arr) {
        if (fun(x)) {
            return x 
        }
    }
    return false;
}

console.log(findElement([1,3,5,8,9,10], function(num){return num % 2 === 0}));
console.log(findElement([1,3,5,9], function(num){return num % 2 === 0}));
console.log(findElement(['Jim','Indian','Marsh','Glitch'], function(str){return str.indexOf('itch') !== -1}));