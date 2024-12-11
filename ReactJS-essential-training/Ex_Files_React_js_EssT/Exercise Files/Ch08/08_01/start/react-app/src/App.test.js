// You can use command npm test to run all of the tests within the app
// npm test will run anything with .test.js extension
// In this case, test is failing because it expects screen to say 'learn react'

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
