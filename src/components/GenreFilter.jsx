import React, { useContext } from 'react'

const GenreFilter = ({ genreList, setSelectedGenre, setSelected }) => {

    return (
        <select className="p-2 mb-4 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white border rounded " onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">All Genre</option>
            {genreList.map((genre) => {
                return (
                    <option key={genre} value={genre.id}>
                        {genre.name}
                    </option>
                );
            })};
        </select>
    )
}

export default GenreFilter