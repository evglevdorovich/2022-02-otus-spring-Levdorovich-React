import React, {useEffect, useState} from 'react'
import * as api from '../api/book'
import '../style.css'

export default function () {
    let [books, setBooks] = useState([]);

    useEffect(() => {
        console.log('effect in Books')
        api.getAll().then(b => setBooks(b))
    },[]);

    return <table className="authors-table">
        <caption className="authors-table--caption">Authors</caption>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {authors.map((author) =>
            <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
            </tr>)
        }
        </tbody>
    </table>

};