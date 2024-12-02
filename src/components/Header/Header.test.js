import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
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