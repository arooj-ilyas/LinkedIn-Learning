/**
- when creating a test, it takes in two arguments: name and callback fn
- tests can be used to render components, even if they are not actually being rendered anywhere on the DOM
    - utilising { render } from "testing-library/react"
*/

import { Star } from "./Star";
import { render } from "@testing-library/react";

// inside of callback fn, we want to destructure a react testing library query from the render of star
// a query is a way of selecting a particular element based on some sort of property
test("renders a h1", () => {
  const { getByText } = render(<Star />);
  // select the text content
  const h1 = getByText(/Cool Star/);
  // expect it to have the text content you write here
  expect(h1).toHaveTextContent("Cool Star");
});
