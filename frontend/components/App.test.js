import React from "react";
import AppFunctional from "./AppFunctional";
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppClass from "./AppClass";

test('sanity', () => {
  expect(true).toBe(true)
})
test('render AppClass without errors', () => {
  render(<AppClass/>);
});

test('render AppFunctional without errors', () => {
  render(<AppFunctional/>);
});



test('sanity', () => {
  expect(true).toBe(true)
})

test('renders without errors', async () => {
  render(<AppFunctional />);
});

test("UP button renders in document", async () => {
  render(<AppFunctional />);

  const upButton = screen.queryByText('UP');
  expect(upButton).toBeInTheDocument();
});

test("DOWN button renders in document", async () => {
  render(<AppFunctional />);

  const downButton = screen.queryByText('DOWN');

  expect(downButton).toBeInTheDocument();
});

test("RIGHT button renders in document", async () => {
  render(<AppFunctional />);

  const rightButton = screen.queryByText('RIGHT');

  expect(rightButton).toBeInTheDocument();
});

test("LEFT button renders in document", async () => {
  render(<AppFunctional />);

  const leftButton = screen.queryByText('LEFT');

  expect(leftButton).toBeInTheDocument();
});