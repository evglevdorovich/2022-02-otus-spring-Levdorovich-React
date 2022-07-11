import React from 'react'
import '../style.css'
import Book from "../components/book/book";
import {Link} from "react-router-dom";
import {BASE_API} from "../api/baseApi";

const COMMENT_BASE_URL = '/comments/'

export default function ({onRemove, books}) {

    return <table className="books-table">
        <caption className="books-table--caption">Books</caption>
        <thead>
        <tr>
            <th>Name</th>
            <th>Author name</th>
            <th>Genre name</th>
        </tr>
        </thead>
        <tbody>
        {books.map((book) => <tr key={book._links.self.href}>
                <Book name={book.name}
                      authorName={book.author.name}
                      genreName={book.genre.name}
                      onRemove={() => onRemove(book._links.self.href)}
                      key={book._links.self.href}
                >
                </Book>
            <td>
                <Link to={convertToBookUri(book._links.self.href)}>
                    <img src="../src/assets/edit-icon.svg" alt="edit-book"/>
                </Link>
            </td>
            <td>
                <Link to={convertToCommentUri(book._links.self.href)}>
                    <img className="comments-icon" src="../src/assets/comments-icon.svg" alt="comments-link"/>
                </Link>
            </td>
            </tr>
        )
        }

        </tbody>
    </table>
};

function convertToBookUri(url) {
    let lengthOfApi = "/api/".length;
    const indexOfApi = url.indexOf("/api/");
    return url.slice(indexOfApi + lengthOfApi);
}

function convertToCommentUri(url) {
    let lengthOfApi = "/api/books/".length;
    const indexOfApi = url.indexOf("/api/books/");
    return "/comments/" + url.slice(indexOfApi + lengthOfApi)
}