import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { renderWithProviders } from "../../utils/test-utlis";
import Home from "./Home";

describe("Home Component", () => {
    it("renders Rating", () => {
      renderWithProviders(<Home />);
      const element = screen.getByText(/Movie Time/i);
      expect(element).toBeInTheDocument();
    });
    it("matches snapshot", () => {
        const { asFragment } = renderWithProviders(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });
});