// function hello(name='world') {
//     name = name;
//     console.log("hello, " + name);
    
// }

// hello('Mustache');
// hello();
// /////////////////////////////////#######################//////////////
// var madlib = function(name, subject) {
//     return `${name}'s favorite subject 
// in school is ${subject}`;
// }

// console.log(madlib('illia', 'math'))

// // //////############################///////////////////////////

// var tipAmount = function (bill, service) {
//     var tip = 0
//     if(service === 'good') {
//         tip = 0.2;
//     } else
//     if (service === 'fair') {
//         tip = 0.15;
//     } else
//     if (service === 'bad') {
//         tip = 0.1;
//     }
//     return bill * tip;
// }


// console.log(tipAmount(100, 'fair'))


// var totalAmount = function (bill, service) {
//     return bill + tipAmount(bill,service);
// }

// console.log(totalAmount(100, 'fair'))

// var splitAmount = function (bill, service, people) {
//     return totalAmount(bill, service) / people;
// }

// console.log(splitAmount(100, 'fair', 5))

// var printNumbers = function (start, end) {
//     for (var i = start; i <= end; i++) {
//         console.log(i);
//     }
// }

// printNumbers(1,5);

// var printNumber = function (start,end) {
//     var i = start;
//     while (i <= end) {
//         console.log(i);
//         i++;
//     }
// }

// printNumber(1,6);

// ????????#########################

// var printSquare = function( size) {
//     var base = '*'.repeat(size);
//     for (var i = 0; i < size; i++) {
//         console.log(base);
        
//     }
// }

// printSquare(5);

///////###################

// var printBox = function( size) {
//     var base = '*'.repeat(size);
//     var middle = '*' + ' '.repeat(size-2) + "*";
    
//     console.log(base);

//     for (var i = 1; i < size - 1; i++) {
//         console.log(middle);
        
//     }

//     console.log(base);
// }

// printBox(5);

//################################

// var printBanner = function(string) {
//     var base = '*'.repeat(string.length + 4);
//     var middle = '* ' + string + " *";
    
//     console.log(base);

    
//         console.log(middle);
        
    

//     console.log(base);
// }

// printBanner('hello, world!');

//###############################

// var findFactors = function(number) {
//     var arr = [];
//     var devider = 2;
    
//     while (number !== 1) {
//         if (number % devider === 0) {
//             number /= devider;
//             arr.push(devider);
//             continue;
//         } else { devider++; }
        
//     }

//     console.log(arr)
// }

// findFactors(234526);
// console.log(2*149*787);

// #############################################


// var alphabet = "abcdefghijklmnopqrstuvwxyz";


// var cipher = function(string, offset) {
//     string = string.toLowerCase().split('')
//     for (var i = 0; i< string.length; i++){
//         if (string[i] === ' ') {
//             continue;
//         }
//         cipherIndex = (alphabet.indexOf(string[i]) + offset) % (alphabet.length);
//         string[i] = alphabet[cipherIndex];
//     }

//     console.log(string[0].toUpperCase() + string.slice(1,string.length).join(''));
// }



// cipher("Genius without education is like silver in the mine", 13);

///#########################################

// var alphabet = "abcdefghijklmnopqrstuvwxyz";


// var decipher = function(string, offset) {
//     string = string.toLowerCase().split('');
//     for (var i = 0; i< string.length; i++){
//         if (string[i] === ' ') {
//             continue;
//         }
//         decipherIndex = (alphabet.indexOf(string[i]) - offset);
//         if (decipherIndex < 0) {
//             decipherIndex += alphabet.length;
//         }
//         decipherIndex %= alphabet.length;
        
//         string[i] = alphabet[decipherIndex];
//     }

//     console.log(string[0].toUpperCase() + string.slice(1,string.length).join(''));
// }



// decipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13);

//###############################################

// var subs = {a:4, e: 3, g: 6, i:1, o:'0', s:5, t:7}

// var leetspeak = function (string) {
//     array = string.toLowerCase().split('');
//     for (var i =0; i < array.length; i++) {
//         // console.log(array[i])
//         if (subs[array[i]]) {
//             // console.log(array[i]);
//             array[i] = subs[array[i]];

//         }
//     }
//     console.log(array[0].toUpperCase() + array.slice(1,string.length).join(''));
// }

// leetspeak("Hello hei lroong aegiost");

//#############################

// var vowels = 'euioa';

// var longVowels = function(string) {
//     string = string.split('');
//     for (var i = 0; i < string.length; i ++) {
//         if (vowels.indexOf(string[i]) + 1 && string[i] === string[i+1]) {
//             string[i] = string[i].repeat(5);
//         }

//     }
//     console.log(string.join(''));
// }

// longVowels('Helloo, wuz uup, word');

// ////#############################################

// var sumNumbers =function(arr) {
//     var sum=0;
//     for (var i =0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumNumbers([1,2,3]));

/////##################################

// var positiveNumbers = function(arr) {
//     newArr = [];
//     for (var i=0; i< arr.length; i++) {
//         if (arr[i] >= 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(positiveNumbers([-1,2,0,-5,6]));

/////###########################

// var matrixAdd = function(m1, m2) {
//     var newM = m1.map( function(arr) {return m1[0].map(function(num) {return num*0})});
//     for (var i = 0; i < m1.length; i++) {
//         for (var j = 0; j < m1[0].length; j ++) {
//             newM[i][j] += m1[i][j] + m2[i][j];

//         }
//     }
//     return newM;
// }

// console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));

//#####################################



// var matrixMultiply = function(m1,m2) {
//     var rows_m1 = m1.length;
//     var cols_m1 = m1[0].length;
//     var rows_m2 = m2.length;
//     var cols_m2 = m2[0].length;

//     if (rows_m2 !== cols_m1) {
//         return "check sizing of matrixes!"
//     }

//     var newM = m1.map(function(row) {return m2[0].map(function(col) {return col*0;})});

//     for (var i =0; i < rows_m1; i++) {
//         for (var j=0; j< cols_m2; j++) {
//             for (var k =0; k < cols_m1; k++) {
//                 newM[i][j] += m1[i][k] * m2[k][j];
//             }
//         }
//     }
//     return newM;
// }

// console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));


/////////#####################################

// var rockPaperScissors = function(x, y) {
//     x = x.toLowerCase();
//     y = y.toLowerCase();
//     var values = ['rock', 'paper', 'scissors'];
//     if (values.indexOf(x) === -1 || values.indexOf(y) === -1) {
//         return 'learn to type';
//     } else
//     if (x === y) {
//         return 'draw';
//     } else
//     if (x ==='rock' && y ==='scissors' || x ==='paper' && y=== 'rock' || x === 'scissors' && y === 'paper') {
//         return 'player 1 wins';
//     } else { return 'player 2 wins'}
// }

// x = prompt('player 1 throw: ');
// y = prompt('player 2 throw: ');

// console.log(rockPaperScissors(x,y));

////////########################################

var ticTacToe = function(m) {

    
   
    for (var row = 0; row < m.length; row++) {
        var countCol = 1;
        var countRow = 1;
        for (var col = 0; col < m[0].length; col++) {
            
            //check matrix for characters
            if (m[row][col] !== null && m[row][col] !== 'O' && m[row][col] !== 'X') {
                return "wrong character inside your matrix!";
            } 

            // check rows
            
            if( m[row][col] === m[row][col-1]) {
                countRow ++;
                if (countRow === 3) {
                    return m[row][col];
                }
            }

            //check columns
            if (col > 0) {
                if(m[col][row] === m[col-1][row]) {
                    countCol ++;
                    
                    if (countCol === 3) {
                        return m[col][row];
                    }
                }
            }

            // //check for diagonals
            // //downward
            // if (row = 0) {
            //     if (m[row])
            // }

        }
    }

    return null;


}

console.log(ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ]));

console.log(ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null]
    ]));

console.log(ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X']
    ]));

// console.log(ticTacToe([
//     ['O', 'X', 'O'],
//     ['X', 'O', null],
//     ['O', 'X', 'X']
//     ]));


