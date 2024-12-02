import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Provides additional matchers
import LoaderScreen from "./LoaderScreen";

describe("LoaderScreen Component", () => {
    it("renders LoaderScreen", () => {
      render(<LoaderScreen msg="test" />);
      const element = screen.getByText(/test/i);
      expect(element).toBeInTheDocument();
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<LoaderScreen />);
        expect(asFragment()).toMatchSnapshot();
    });
});