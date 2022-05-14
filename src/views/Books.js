import React, {useEffect, useState} from 'react'
import * as api from '../api/book'
import '../style.css'
import Book from "../components/book/book";

export default function () {
    let [books, setBooks] = useState([]);
    let [changed, setChange] = useState(false);
    let onBookRemove = async (id) => {
        console.log(changed, 'before changing')
        api.remove(id);
        setChange(true);
        console.log('in Book remove')
    };


    useEffect(() => {
        console.log('in useEffect')
        api.getAll().then(allBooks => {
            console.log(allBooks, 'here')
            setChange(false);
            setBooks(allBooks)
        })
        console.log(books, 'books after use Effect')
    }, [changed === false ? changed : null]);

    return <table className="authors-table">
        <caption className="authors-table--caption">Authors</caption>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author name</th>
            <th>Genre name</th>
        </tr>
        </thead>
        <tbody>
        {books.map((book) =>
            <Book id={book.id}
                  name={book.name}
                  authorName={book.author.name}
                  genreName={book.genre.name}
                  onRemove={() => onBookRemove(book.id)}
                  key={book.id}
            />)
        }
        </tbody>
    </table>

};