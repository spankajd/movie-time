import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { renderWithProviders } from "../../utils/test-utlis";
import MovieList from "./MovieList";

describe("MovieList Component", () => {
    const dummyMovies = [
        {
            title:"Sample Movie",
            episode_id:1,
            imdbRating: 'N/A'
        },
        {
            title:"Testing Movie",
            episode_id:2,
            imdbRating: 'N/A'
        },
        {
            title:"XYZ Movie",
            episode_id:3,
            imdbRating: '8.5'
        }
    ]

    it("renders MovieList", () => {
        renderWithProviders(
            <MovieList movies={[{title:'Test'}]}/>
        );
        const element = screen.getByText(/Test/i);
        expect(element).toBeInTheDocument();
    });
    
    it("matches snapshot", () => {
        const { asFragment } = renderWithProviders(<MovieList movies={[{title:'Test'}]} />);
        expect(asFragment()).toMatchSnapshot();
    });

    
    it("check with dummy search filter", () => {
        renderWithProviders(<MovieList movies={dummyMovies} />, {
            preloadedState: {
                moviesState: {
                    searchQuery: "Testing Movie",
                    movies:dummyMovies
                }
            }
        });
        const element = screen.getByText(/Episode 2/i);
        expect(element).toBeInTheDocument();
    });

    it("check with dummy sort by title filter", () => {
        renderWithProviders(<MovieList movies={dummyMovies} />, {
            preloadedState: {
                moviesState: {
                    sortBy: "title",
                    movies:dummyMovies
                }
            }
        });
        const element = screen.getByText(/Episode 1/i);
        expect(element).toBeInTheDocument();
    });

    it("check with dummy sort by episode id filter", () => {
        renderWithProviders(<MovieList movies={dummyMovies} />, {
            preloadedState: {
                moviesState: {
                    sortBy: "episode_id",
                    movies:dummyMovies
                }
            }
        });
        const element = screen.getByText(/Episode 1/i);
        expect(element).toBeInTheDocument();
    });

    it("check with dummy sort by rating filter", () => {
        renderWithProviders(<MovieList movies={dummyMovies} />, {
            preloadedState: {
                moviesState: {
                    sortBy: "imdbRating",
                    movies:dummyMovies
                }
            }
        });
        const element = screen.getByText(/Episode 1/i);
        expect(element).toBeInTheDocument();
    });

    it("check with dummy sort by missing property filter", () => {
        renderWithProviders(<MovieList movies={dummyMovies} />, {
            preloadedState: {
                moviesState: {
                    sortBy: "year",
                    movies:dummyMovies
                }
            }
        });
        const element = screen.getByText(/Episode 1/i);
        expect(element).toBeInTheDocument();
    });
});