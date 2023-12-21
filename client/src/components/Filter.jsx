// Filter.jsx
import React, { useState } from "react";

const Filter = ({ onClose, onApplyFilter }) => {
    const [filterValues, setFilterValues] = useState({ genre: "", releaseYear: "", rating: "" });

    const handleFilterChange = (field, value) => {
        setFilterValues((prevValues) => ({ ...prevValues, [field]: value }));
    };

    const handleApplyFilter = () => {
        onApplyFilter(filterValues);
        onClose();
    };

    return (
        <div className="filter">
            <label>
                Filter By Genre:
                <input type="text" placeholder="Genre" onChange={(e) => handleFilterChange("genre", e.target.value)} value={filterValues.genre} />
            </label>

            <label>
                Filter By Release Year:
                <input
                    type="number"
                    placeholder="Year"
                    onChange={(e) => handleFilterChange("releaseYear", e.target.value)}
                    value={filterValues.releaseYear}
                />
            </label>

            <label>
                Filter By Rating:
                <input
                    type="number"
                    placeholder="Rating"
                    onChange={(e) => handleFilterChange("rating", e.target.value)}
                    value={filterValues.rating}
                />
            </label>

            <button onClick={handleApplyFilter}>Apply Filter</button>
            <button onClick={handleApplyFilter}>Clear Filter</button>
        </div>
    );
};

export default Filter;
