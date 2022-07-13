/*Arrow Functions Exercise*/

function double(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

// // Refactor the above code to use two arrow functions. Turn it into a one-liner


// function double(arr) { arr.map(val => val * 2 )}

const double2 = arr => arr.map (val => val * 2);

//Refactor the following functions to use arrow functions:

function squareAndFindEvens(numbers) {
    var squares = numbers.map(function(num){
        return num ** 2;
    });
    var evens = squares.filter(function(square) {
        return square % 2 === 0;
    });
    return evens;
}

const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0)