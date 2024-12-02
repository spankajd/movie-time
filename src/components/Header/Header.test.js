// import React from "react";
// import { render } from "@testing-library/react";
// import Header from "./Header";

// test("renders Header component correctly", () => {
//   const { asFragment } = render(<Header />);
//   expect(asFragment()).toMatchSnapshot();
// });
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // Provides additional matchers
import Header from "./Header";

describe("Header Component", () => {
    it("renders Header", () => {
      render(<Header />);
      const headerElement = screen.getByText(/Movie Time/i);
      expect(headerElement).toBeInTheDocument();
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});