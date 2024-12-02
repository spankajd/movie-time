import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Rating from "./Rating";

describe("Rating Component", () => {
    it("renders Rating", () => {
      render(<Rating rating={null} />);
      const element = screen.getByText(/N\/A/i);
      expect(element).toBeInTheDocument();
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Rating />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders Rating with 5 star", () => {
        render(<Rating rating={5} />);
        const element = screen.getAllByAltText(/full star/i)[0];
        expect(element).toBeInTheDocument();
      });
      
});