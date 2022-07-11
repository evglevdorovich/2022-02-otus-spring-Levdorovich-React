import React, {useEffect, useState} from 'react';
import '../../style.css'
import {useForm} from 'react-hook-form'
import {Link, useParams} from "react-router-dom";
import * as bookApi from "../../api/book"
import * as authorApi from "../../api/author"
import * as genreApi from "../../api/genre"

export default function Book() {
    let [book, setBook] = useState();
    let [booksGenreHref, setBooksGenreHref] = useState();
    let [booksAuthorHref, setBooksAuthorHref] = useState();

    let [authorsExceptBooks, setAuthorsExceptBooks] = useState([]);
    let [genresExceptBooks, setGenresExceptBooks] = useState([]);

    let [authorsExceptBooksDownloaded, setAuthorsExceptBooksDownloaded] = useState(false);
    let [genresExceptBooksDownloaded, setGenresExceptBooksDownloaded] = useState(false);

    const {id} = useParams();

    const getAuthorsHrefFromBooks = (authors, book) => {
        return authors.find((a) => a.name !== book.author.name)._links.self.href;
    }

    const getGenresHrefFromBooks = (genres, book) => {
        return genres.find((g) => g.name !== book.genre.name)._links.self.href;
    }

    const getAuthorsExceptBook = (authors, author) => {
        return authors.filter((auth) => auth.name !== author.name)
    };
    const getGenresExceptBook = (genres, genre) => {
        return genres.filter((g) => g.name !== genre.name);
    }

    useEffect(() => {
        let tempBook;
        bookApi.getById(id)
            .then((b) => {
                setBook(b)
                tempBook = b
            })
            .then(() => genreApi.getAll()
                .then(genres => genres._embedded.genres)
                .then((genres) => {
                    setGenresExceptBooks(getGenresExceptBook(genres, tempBook.genre));
                    setBooksGenreHref(getGenresHrefFromBooks(genres, tempBook));
                })
                .then(() => setGenresExceptBooksDownloaded(true)))
            .then(() => authorApi.getAll()
                .then(authors => authors._embedded.authors)
                .then((authors) => {
                    setAuthorsExceptBooks(getAuthorsExceptBook(authors, tempBook.author));
                    setBooksAuthorHref(getAuthorsHrefFromBooks(authors, tempBook));
                })
                .then(() => setAuthorsExceptBooksDownloaded(true)))
    }, [])

    const onUpdate = (data) => bookApi.update(id, data);

    const {register, handleSubmit, formState: {errors}} = useForm();

    return !genresExceptBooksDownloaded || !authorsExceptBooksDownloaded ? null :
        <>
            <form className="flex flex--books" onSubmit={handleSubmit((data) => {
                onUpdate(data)
            })}>
                <table className="books-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Genre</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <label className="hidden" htmlFor="book-name">name:</label>
                            <input {...register("name", {required: 'Not an empty book'})}
                                   id="book-name"
                                   className="book-name"
                                   type="text"
                                   name="name"
                                   defaultValue={book.name}/>
                        </td>
                        <td>
                            <label className="hidden" htmlFor="genre-select">Choose a genre</label>
                            <select {...register("genre")} id="genre-select" name="genre">
                                <option defaultValue={booksGenreHref} value={booksGenreHref}>{book.genre.name}
                                </option>
                                {genresExceptBooks.map((g) =>
                                    <option key={g._links.self.href} value={g._links.self.href}>{g.name}
                                    </option>)
                                }
                            </select>
                        </td>
                        <td>
                            <label className="hidden" htmlFor="author-select">Choose an author</label>
                            <select {...register("author")} id="author-select" name="author">
                                <option defaultValue={booksAuthorHref} value={booksAuthorHref}>{book.author.name}
                                </option>
                                {authorsExceptBooks.map((a) =>
                                    <option key={a._links.self.href} value={a._links.self.href}>{a.name}
                                    </option>)
                                }
                            </select>
                        </td>
                        <td>
                            <input value={book._links.self.href} name="book" className="submit-icon" type="image" src="../src/assets/submit-icon.svg"
                                   alt="submit-icon"/>
                        </td>
                        <td>
                            <Link to="/">
                                <img className="return-icon" src="../src/assets/return-icon.svg" alt="return-icon"/>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
            <p className="updating-book--warning flex">{errors.name?.message}</p>
        </>
};