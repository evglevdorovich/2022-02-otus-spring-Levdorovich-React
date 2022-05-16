import React from "react";
import '../style.css'

export default function ({genres}) {

    return <table className="genres-table">
        <caption className="genres-table--caption">Genres</caption>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {genres.map((genre) =>
            <tr key={genre.id}>
                <td>{genre.id}</td>
                <td>{genre.name}</td>
            </tr>
        )}
        </tbody>
    </table>
};