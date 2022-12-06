import Input from "./Input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect, vi } from "vitest";

it("should apply the correct label", () => {
  render(
    <Input
      id="input"
      label="My Input"
      type="text"
      value=""
      onChange={() => {}}
    />
  );
  screen.getByLabelText("My Input");
});

it("should render an input with the provided value", () => {
  render(
    <Input
      id="input"
      label="My Input"
      type="text"
      value="value"
      onChange={() => {}}
    />
  );
  expect(screen.getByRole("textbox", { name: "My Input" })).toHaveValue(
    "value"
  );
});

it("should call the onChange handler when the input value changes", async () => {
  const onChange = vi.fn();
  render(
    <Input
      id="input"
      label="My Input"
      type="text"
      value="value"
      onChange={() => {
        onChange();
      }}
    />
  );
  await userEvent.type(screen.getByLabelText("My Input"), "Test");
  expect(onChange).toHaveBeenCalledTimes(4);
});

it("should render an input with the provided type", () => {
  render(
    <Input
      id="input"
      label="My Input"
      type="number"
      value="123"
      onChange={() => {}}
    />
  );
  expect(screen.getByLabelText("My Input")).toHaveValue(123);
  expect(screen.getByLabelText("My Input")).toHaveAttribute("type", "number");
});

it("should have a default type of text", () => {
  render(
    <Input id="input" label="My Input" value="Test" onChange={() => {}} />
  );
  expect(screen.getByLabelText("My Input")).toHaveValue("Test");
  expect(screen.getByLabelText("My Input")).toHaveAttribute("type", "text");
});

it("should render an error message", () => {
  render(
    <Input
      id="input"
      label="My Input"
      type="text"
      value=""
      error="This is an error"
      onChange={() => {}}
    />
  );
  expect(screen.getByText("This is an error")).toBeInTheDocument();
});
