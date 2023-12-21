// Filter.jsx
import React from "react";

const Filter = ({ genres, onFilterChange, onClose }) => {
    const handleFilterChange = (field, value) => {
        onFilterChange(field, value);
        onClose();
    };

    return (
        <div className="filter">
            <label>
                Filter By Genre:
                <select onChange={(e) => handleFilterChange("genre", e.target.value)}>
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Filter By Release Year:
                <input type="number" placeholder="Year" onChange={(e) => handleFilterChange("releaseYear", e.target.value)} />
            </label>

            <label>
                Filter By Rating:
                <input type="number" placeholder="Rating" onChange={(e) => handleFilterChange("rating", e.target.value)} />
            </label>
        </div>
    );
};

export default Filter;
