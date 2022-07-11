import React from 'react'
import '../style.css'

export default function ({authors}) {

    return <table className="authors-table">
        <caption className="authors-table--caption">Authors</caption>
        <thead>
        <tr>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {authors.map((author) =>
            <tr key={author._links.self.href}>
                <td>{author.name}</td>
            </tr>)
        }
        </tbody>
    </table>

};