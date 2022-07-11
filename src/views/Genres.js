import React from "react";
import '../style.css'

export default function ({genres}) {

    return <table className="genres-table">
        <caption className="genres-table--caption">Genres</caption>
        <thead>
        <tr>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {genres.map((genre) =>
            <tr key={genre._links.self.href}>
                <td>{genre.name}</td>
            </tr>
        )}
        </tbody>
    </table>
};