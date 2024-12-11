/*
- We want to write tests here for our Checkbox.js component using the test function from react testing library
- Utilize destructured queries - https://testing-library.com/docs/queries/about/
*/

import { render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checked box should change value to true", () => {
  // callback fn should contain test
  const { getByLabelText } = render(<Checkbox />);
});
