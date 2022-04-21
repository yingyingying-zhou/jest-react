import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { initialState, reducer } from "../store/counter";
import TestRedux from "./Redux";

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

// afterEach(cleanup);

it("checks initial state is equal to 0", () => {
  const { getByTestId } = renderWithRedux(<TestRedux />);
  expect(getByTestId("counter")).toHaveTextContent("0");
});


