import React, {useEffect, useState} from 'react';
import '../../style.css'
import {useForm} from 'react-hook-form'
import {Link, useParams} from "react-router-dom";
import * as bookApi from "../../api/book"
import * as authorApi from "../../api/author"
import * as genreApi from "../../api/genre"

export default function Book() {
    let [book, setBook] = useState();
    let [authorsExceptBooks, setAuthorsExceptBooks] = useState([]);
    let [genresExceptBooks, setGenresExceptBooks] = useState([]);

    let [authorsExceptBooksDownloaded, setAuthorsExceptBooksDownloaded] = useState(false);
    let [genresExceptBooksDownloaded, setGenresExceptBooksDownloaded] = useState(false);

    const {id} = useParams();

    const getAuthorsExceptBook = (authors, author) => {
        return authors.filter((auth) => auth.id !== author.id)
    };
    const getGenresExceptBook = (genres, genre) => {
        return genres.filter((g) => g.id !== genre.id);
    }

    useEffect(() => {
        let tempBook;
        bookApi.getById(id)
            .then((b) => {
                setBook(b)
                tempBook = b
            })
            .then(() => genreApi.getAll()
                .then((genres) => {
                    setGenresExceptBooks(() => getGenresExceptBook(genres, tempBook.genre))
                })
                .then(() => setGenresExceptBooksDownloaded(true)))
            .then(() => authorApi.getAll()
                .then((authors) => setAuthorsExceptBooks(getAuthorsExceptBook(authors, tempBook.author)))
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
                        <th>ID</th>
                        <th>Name</th>
                        <th>Genre</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <label htmlFor="book-id" className="hidden">id:</label>
                            <input className="book-id" id="book-id" type="text" name="id" value={book.id} readOnly/>
                        </td>
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
                            <select {...register("genreId")} id="genre-select" name="genreId">
                                <option defaultValue={book.genre.id} value={book.genre.id}>{book.genre.name}
                                </option>
                                {genresExceptBooks.map((g) =>
                                    <option key={g.id} value={g.id}>{g.name}
                                    </option>)
                                }
                            </select>
                        </td>
                        <td>
                            <label className="hidden" htmlFor="author-select">Choose an author</label>
                            <select {...register("authorId")} id="author-select" name="authorId">
                                <option defaultValue={book.author.id} value={book.author.id}>{book.author.name}
                                </option>
                                {authorsExceptBooks.map((a) =>
                                    <option key={a.id} value={a.id}>{a.name}
                                    </option>)
                                }
                            </select>
                        </td>
                        <td>
                            <input className="submit-icon" type="image" src="../src/assets/submit-icon.svg"
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