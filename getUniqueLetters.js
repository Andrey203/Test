/**
 * Given two strings, first and second. Find all letters (ignoring case)
 * which are present only in one string but not the other.
 */
function getUniqueLetters(first, second) {
  // Only change code below this line
  let str = "";
  for (let i=0; i<first.length; i++) {
  let reg = new RegExp(first[i], "i");
  if (first[i] == " ") continue;
  if (!reg.test(second)&&!reg.test(str)) {
  str += first[i].toLowerCase();
  }
  }
  for (let i=0; i<second.length; i++) {
  let reg = new RegExp(second[i], "i");
  if (second[i] == " ") continue;
  if (!reg.test(first)&&!reg.test(str)) {
  str += second[i].toLowerCase();
  }
  }
  return str;
  // Only change code above this line
}

// Tests
test(getUniqueLetters('aBcdef', 'CdEfgh'), 'abgh');
test(getUniqueLetters('aAAaabBb', 'ab'), '');
test(getUniqueLetters('Happy New Year', 'nyh'), 'apewr');

function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: "${actual}" is not equal to expected "${expected}"`;
    console.error(errorMessage);
  } else {
    console.log(`Test ${testName} passed!`);
  }
}