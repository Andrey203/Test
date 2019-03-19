/**
 * Convert decimal number to it's binary representation.
 *
 * DON'T use input.toString(2);
 *
 * Wiki page explaining the conversion:
 https://en.wikipedia.org/wiki/Binary_number#Decimal
 */
function toBinaryString(input) {
    // Only change code below this line
    if (input == 0) return "0";
    let inp = input;
    let m = 0;
    let arr = [];
    let result;
    do {
        m = inp%2;
        inp /= 2;
        inp = Math.floor(inp);
        result = m;
        arr.unshift(result);
    } while (inp != 0);
    return arr.join("");
    /**
     * or something like this:
     * return input.toString(2);
     */
    // Only change code above this line
}

// Tests
test(toBinaryString(0), '0', 'zero');
test(toBinaryString(1), '1', 'one');
test(toBinaryString(2), '10', 'smallNumber');
test(toBinaryString(65), '1000001', 'mediumNumber');
test(toBinaryString(1032), '10000001000', 'largeNumber');

function test(actual, expected, testName = '') {
    if (actual !== expected) {
        const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
        console.error(errorMessage);
    } else {
        console.log(`Test ${testName} passed!`);
    }

}