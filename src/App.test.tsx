// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import HiddenMessage from "./App";

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message";
  const HiddenMsg = () => {
    return <HiddenMessage>{testMessage}</HiddenMessage>;
  };
  const utils = render(<HiddenMsg />);
  // console.log(utils, 'utils')
  render(<HiddenMsg />);

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull();

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  userEvent.click(screen.getByLabelText(/show/i));

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument();
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I的/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph打算").toMatch(/stop/);
});
