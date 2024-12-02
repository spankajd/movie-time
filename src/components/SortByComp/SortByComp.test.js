import { fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Provides additional matchers
import { renderWithProviders } from "../../utils/test-utlis";
import SortByComp from "./SortByComp";

describe("SortByComp Component", () => {
    it("renders SortByComp", () => {
        renderWithProviders(
            <SortByComp />
        );
        const element = screen.getByText(/Sort By/i);
        expect(element).toBeInTheDocument();
    });

    it("matches snapshot", () => {
        const { asFragment } = renderWithProviders(<SortByComp />);
        expect(asFragment()).toMatchSnapshot();
    });
    
    it("renders SortByComp with handleSortChange triggered", () => {
        renderWithProviders(<SortByComp />);
        let selecteElement = screen.getByTestId('sortBy');
        // fireEvent.click(selecteElement);
        // const element = screen.getByText("Episode");
        fireEvent.change(selecteElement, {
            target: {
                value:"Episode"
            }
        });
        const element = screen.getByText("Episode");
        expect(element).toBeInTheDocument();

        // expect(selecteElement.value).toBe('Episode');
    });
});