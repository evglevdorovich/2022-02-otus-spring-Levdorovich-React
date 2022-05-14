import React, {useEffect, useState} from "react";
import * as api from "../api/genre";
import '../style.css'

export default function () {
    let [genres, setGenres] = useState([]);

    useEffect(() => {
        console.log('effect in Genres')
        api.getAll().then(g => setGenres(g))
    }, []);

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