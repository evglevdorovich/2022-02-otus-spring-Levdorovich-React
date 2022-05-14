import React from 'react';
import propTypes from './props'
import {Link} from "react-router-dom";

Book.propTypes = propTypes;
const BOOK_BASE_URL = "api/books/";
const COMMENT_BASE_URL = "api/comments/"

export default function Book ({...book}) {

    return <tr>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.authorName}</td>
        <td>{book.genreName}</td>
        <td>
            <Link to={`${BOOK_BASE_URL}${book.id}`}>
                <img src="../../assets/edit-icon.svg" alt="edit-book"/>
            </Link>
        </td>
        <td>
            <Link to={`${COMMENT_BASE_URL}${book.id}`}>
                <img className="comments-icon" src="../../assets/comments-icon.svg" alt="comments-link"/>
            </Link>
        </td>
        <td>
            <button onClick={book.onRemove}><img src="../../assets/wastebasket-icon.svg" alt="delete-icon"/></button>
        </td>
    </tr>
};