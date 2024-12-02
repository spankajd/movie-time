import { screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Provides additional matchers
import MovieDetails from "./MovieDetails";
import { renderWithProviders } from "../../utils/test-utlis";

describe("MovieDetails Component", () => {
    it("renders MovieDetails", () => {
        renderWithProviders(
            <MovieDetails />
        );
        const element = screen.getByText(/Please select movie from the list/i);
        expect(element).toBeInTheDocument();
    });
    
    it("matches snapshot", () => {
        const { asFragment } = renderWithProviders(<MovieDetails />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders MovieDetails with selectedMovie", () => {
        renderWithProviders(
            <MovieDetails />, {
                preloadedState :{
                    moviesState : {
                        selectedMovie: {
                            title:'Test'
                        }
                    }
                }
                
            }
        );
        const element = screen.getByText(/Test/i);
        expect(element).toBeInTheDocument();
    });
});