// Where any test will run which are a part of this file
// CRA already has Jest configured

/*
- Jest test function takes in a name as its first argument, and a callback function as its second 
- Callback function holds another function inside of it called Expect
*/

import { timesTwo } from "./functions";

test("Multiples by two", () => {
  expect(timesTwo(4)).toBe(8); // write out a matcher with the expected output -> https://jestjs.io/docs/using-matchers
});
