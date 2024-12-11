/*
- We want to write tests here for our Checkbox.js component using the queries from react testing library and built in queries from jest
- Utilize destructured queries - https://testing-library.com/docs/queries/about/
*/

import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checked box should change value to true", () => {
  // callback fn should contain test
  const { getByLabelText } = render(<Checkbox />);

  // getByLabelText is going to look for 'not checked', adding i gets rid of case sensitivity in regex
  const checkbox = getByLabelText(/not checked/i);

  // we want to automate the process of firing an event on this checkbox, e.g. so test can interact with dom and 'click' checkbox
  fireEvent.click(checkbox); // triger an event change
  expect(checkbox.checked).toEqual(true);
});
