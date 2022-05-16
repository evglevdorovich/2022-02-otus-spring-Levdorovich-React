import React from 'react';
import propTypes from './props'
import '../../style.css'

Book.propTypes = propTypes;

export default function Book({...book}) {

    return <tr>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.authorName}</td>
        <td>{book.genreName}</td>
        <td>
            <button onClick={() => {
                console.log('book deleted')
                book.onRemove()
            }
            }><img className="basket-icon"
                   src="./../src/assets/wastebasket-icon.svg"
                   alt="delete-icon"/></button>
        </td>
    </tr>
};