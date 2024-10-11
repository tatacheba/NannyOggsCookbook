import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders the header", () => {
    render(<App />);
    const headerElement = screen.getByText(/Nanny Ogg's Cookbook/i);
    expect(headerElement).toBeInTheDocument();
  });
});
