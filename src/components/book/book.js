import React, {useEffect, useState} from 'react';
import propTypes from './props'
import {Link} from "react-router-dom";
import '../../style.css'

Book.propTypes = propTypes;
const BOOK_BASE_URL = "api/books/";
const COMMENT_BASE_URL = "api/comments/"

export default function Book({...book}) {

    return <tr>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.authorName}</td>
        <td>{book.genreName}</td>
        <td>
            <Link to={`${BOOK_BASE_URL}${book.id}`}>
                <img src="../src/assets/edit-icon.svg" alt="edit-book"/>
            </Link>
        </td>
        <td>
            <Link to={`${COMMENT_BASE_URL}${book.id}`}>
                <img className="comments-icon" src="../src/assets/comments-icon.svg" alt="comments-link"/>
            </Link>
        </td>
        <td>
            <button onClick={() => {
            console.log('book deleted')
            book.onRemove()}
            }><img className="basket-icon"
                                                src="./../src/assets/wastebasket-icon.svg"
                                                alt="delete-icon"/></button>
        </td>
    </tr>
};