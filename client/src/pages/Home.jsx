import React, { useEffect, useState } from "react";
import MovieDetails from "../components/MovieDetails";
import MovieForm from "../components/MovieForm";
import Filter from "../components/Filter";
import Modal from "../components/Modal";
import useMoviesContext from "../hooks/useMoviesContext";
import useAuthContext from "../hooks/useAuthContext";
import Loader from "../components/Loader";

const Home = () => {
    const { movies, fetchMovies, isLoading } = useMoviesContext();
    const { user } = useAuthContext();

    const [sortedBy, setSortedBy] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");
    const [filterBy, setFilterBy] = useState({ genre: "", releaseYear: "", rating: "" });
    const [searchTerm, setSearchTerm] = useState("");
    const [isFilterModalOpen, setFilterModalOpen] = useState(false);

    useEffect(() => {
        if (user) {
            fetchMovies();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortOrder((prevOrder) => (selectedSort === sortedBy ? (prevOrder === "asc" ? "desc" : "asc") : "asc"));
        setSortedBy(selectedSort);
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    };

    const handleFilterChange = (field, value) => {
        setFilterBy((prevFilters) => ({ ...prevFilters, [field]: value }));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterButtonClick = () => {
        setFilterModalOpen(true);
    };

    const handleFilterModalClose = () => {
        setFilterModalOpen(false);
    };

    const filteredMovies =
        movies &&
        movies.filter((movie) => {
            return (
                (!filterBy.genre || movie.genre === filterBy.genre) &&
                (!filterBy.releaseYear || movie.releaseYear === parseInt(filterBy.releaseYear, 10)) &&
                (!filterBy.rating || movie.rating === parseInt(filterBy.rating, 10)) &&
                movie.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });

    const sortedMovies = (filteredMovies || []).sort((a, b) => {
        if (sortedBy === "name") {
            return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (sortedBy === "releaseYear") {
            return sortOrder === "asc" ? a.releaseYear - b.releaseYear : b.releaseYear - a.releaseYear;
        } else if (sortedBy === "rating") {
            return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
        } else if (sortedBy === "runtime") {
            return sortOrder === "asc" ? a.runtime - b.runtime : b.runtime - a.runtime;
        }
        // Add more cases if needed for other sorting options
        return 0;
    });

    return (
        <main className="home">
            <div className="content-block">
                <div className="controls">
                    <label>
                        Sort By:
                        <select onChange={handleSortChange} value={sortedBy}>
                            <option value="">-- Select --</option>
                            <option value="name">Name</option>
                            <option value="releaseYear">Release Year</option>
                            <option value="runtime">Runtime</option>
                            <option value="rating">Rating</option>
                        </select>
                        {sortedBy && (
                            <button className="sort-order" onClick={toggleSortOrder}>
                                {sortOrder === "asc" ? "🔼" : "🔽"}
                            </button>
                        )}{" "}
                    </label>
                    <button className="filter-button" onClick={handleFilterButtonClick}>
                        Filter
                    </button>

                    <label>
                        <input type="text" placeholder="Search..." onChange={handleSearchChange} value={searchTerm} />
                    </label>

                    <Modal isOpen={isFilterModalOpen} onClose={handleFilterModalClose}>
                        <Filter genres={["Action", "Drama", "Comedy"]} onFilterChange={handleFilterChange} />
                    </Modal>
                </div>

                {sortedMovies.length > 0 ? (
                    <div className="movies">
                        {sortedMovies.map((movie) => (
                            <MovieDetails key={movie._id} movie={movie} />
                        ))}
                    </div>
                ) : isLoading ? (
                    <Loader />
                ) : (
                    <p>No movies found...</p>
                )}
            </div>

            <div className="form-block">
                <MovieForm />
            </div>
        </main>
    );
};

export default Home;
