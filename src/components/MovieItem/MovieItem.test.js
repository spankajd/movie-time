import { fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { renderWithProviders } from "../../utils/test-utlis";
import MovieItem from "./MovieItem";

describe("MovieItem Component", () => {

    it("matches snapshot", () => {
        const { asFragment } = renderWithProviders(<MovieItem movie={{title:'Test'}} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders MovieItem", () => {
        renderWithProviders(
            <MovieItem movie={{title:'Test'}}/>
        );
        const element = screen.getByText(/Test/i);
        expect(element).toBeInTheDocument();
    });


    it("renders MovieItem with isActive as true", () => {
        renderWithProviders(
            <MovieItem movie={{title:'Test'}} isActive={true}/>
        );
        const element = screen.getByText(/Test/i);
        expect(element).toBeInTheDocument();
    });

    it("renders MovieItem and trigger click event", () => {
        renderWithProviders(
            <MovieItem movie={{title:'Test'}} isActive={true}/>
        );
        fireEvent.click(screen.getByTestId('movie-item'));
        
        const element = screen.getByText(/Please select movie from the list/i);
        expect(element).toBeInTheDocument();
    });

    it("renders MovieItem and trigger click event two times", () => {
        renderWithProviders(
            <MovieItem movie={{title:'Test'}}/>
        );
        fireEvent.click(screen.getByTestId('movie-item'));
        fireEvent.click(screen.getByTestId('movie-item'));

        const element = screen.getByText(/Test/i);
        expect(element).toBeInTheDocument();
    });
});