import React, {useEffect, useState} from 'react'
import * as api from '../api/author'
import '../style.css'

export default function ({authors}) {

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