import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Lamort Tattoo Studio title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Lamort Tattoo Studio/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders blackwork subtitle", () => {
  render(<App />);
  const subtitleElement = screen.getByText(/Especialista em blackwork/i);
  expect(subtitleElement).toBeInTheDocument();
});
