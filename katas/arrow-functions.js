/* 
 * 1. Convert this to an arrow function
 */
function add(x, y) {
    return x + y;
}

/*
 * 2. If a function only has one argument, you can exclude the parentheses.
 *    Convert this to an arrow function that takes advantage of that.
 */
function increment(number) {
    return number + 1;
}

/* 
 * 3. If a function's body includes a single expression, you can drop the curly
 *    braces and the return statement. Update this arrow function to be a one
 *    liner which doesn't include "return".
 */
const decrement = number => {
    return number - 1;
};

module.exports = {
    add,
    increment,
    decrement
};
