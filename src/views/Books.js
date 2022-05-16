import React from 'react'
import '../style.css'
import Book from "../components/book/book";
import {Link} from "react-router-dom";

const COMMENT_BASE_URL = '/comments/'
const BOOK_EDIT_BASE_URL = '/books/'

export default function ({onRemove, books}) {

    return <table className="books-table">
        <caption className="books-table--caption">Books</caption>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author name</th>
            <th>Genre name</th>
        </tr>
        </thead>
        <tbody>
        {books.map((book) => <tr>
                <Book id={book.id}
                      name={book.name}
                      authorName={book.author.name}
                      genreName={book.genre.name}
                      onRemove={() => onRemove(book.id)}
                      key={book.id}
                >
                </Book>
            <td>
                <Link to={`${BOOK_EDIT_BASE_URL}${book.id}`}>
                    <img src="../src/assets/edit-icon.svg" alt="edit-book"/>
                </Link>
            </td>
            <td>
                <Link to={`${COMMENT_BASE_URL}${book.id}`}>
                    <img className="comments-icon" src="../src/assets/comments-icon.svg" alt="comments-link"/>
                </Link>
            </td>
            </tr>
        )
        }

        </tbody>
    </table>
};