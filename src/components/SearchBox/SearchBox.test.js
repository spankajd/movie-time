import { fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { renderWithProviders } from "../../utils/test-utlis";
import SearchBox from "./SearchBox";

describe("SearchBox Component", () => {

    const dummyMovies = [
        {
            title:"Sample Movie",
            episode_id:1
        },
        {
            title:"Testing Movie",
            episode_id:2
        }
    ]

    it("renders SearchBox", () => {
        renderWithProviders(<SearchBox/>);
        const element = screen.getByTestId(/SearchBox/i);
        expect(element).toBeInTheDocument();
      });
      
    it("matches snapshot", () => {
        const { asFragment } = renderWithProviders(<SearchBox />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders SearchBox with handleSuggestionClick triggered", () => {
        renderWithProviders(<SearchBox movies={dummyMovies} />, {
            preloadedState: {
                moviesState: {
                    movies:dummyMovies
                }
            }
        });
        const input = screen.getByTestId(/SearchBox/i);
        fireEvent.change(input,{
            target: {
                value: "Movie"
            }
        });
        const suggestionItem = screen.getByText(/Sample Movie/i);
        fireEvent.click(suggestionItem);
        const element = screen.getByTestId(/SearchBox/i);
        expect(element.value).toBe("Sample Movie");
    });

    it("renders SearchBox with handleInputChange triggered with empty string", () => {
        renderWithProviders(<SearchBox movies={dummyMovies} />, {
            preloadedState: {
                moviesState: {
                    movies:dummyMovies
                }
            }
        });
        const input = screen.getByTestId(/SearchBox/i);
        fireEvent.change(input,{
            target: {
                value: "Movie"
            }
        });

        fireEvent.change(input,{
            target: {
                value: ""
            }
        });
        const element = screen.getByTestId(/SearchBox/i);
        expect(element).toBeInTheDocument();
    });
});