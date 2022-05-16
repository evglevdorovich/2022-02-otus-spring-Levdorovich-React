import React, {useEffect, useState} from 'react'
import CreatingBook from '../components/creatingBook/book'
import Books from '../views/Books'
import * as bookApi from '../api/book'
import * as genreApi from '../api/genre'
import * as authorApi from '../api/author'
import * as commentApi from '../api/comment'
import * as RouterView from '../routes'
import Genres from "./Genres";
import Authors from "./Authors";
// 3:37

export default function Library() {
    let [genres, setGenres] = useState();
    let [authors, setAuthors] = useState();
    let [books, setBooks] = useState();

    let [genreDownload, setGenreDownload] = useState(false);
    let [authorDownload, setAuthorDownload] = useState(false);
    let [bookDownloaded, setBookDownloaded] = useState(false);

    let onBookCreate = (data) => {
        bookApi.create(data)
            .then(() => bookApi.getAll())
            .then((b) => setBooks(b))
    }

    let onBookRemove = (id) => {
        console.log('In book remove')
        bookApi.remove(id)
            .then(() => bookApi.getAll())
            .then((b) => setBooks(b))
    }

    useEffect(() => {
            genreApi.getAll().then((g) => setGenres(g)).then(() => setGenreDownload(true));
            authorApi.getAll().then((a) => setAuthors(a)).then(() => setAuthorDownload(true))
            bookApi.getAll().then((a) => setBooks(a)).then(() => setBookDownloaded(true))
        }
        , []);


    return !genreDownload || !authorDownload || !bookDownloaded ? null : <>
        <CreatingBook genres={genres} authors={authors} onCreate={onBookCreate}/>
        <Books books={books} onRemove={onBookRemove}/>
        <Genres genres={genres}/>
        <Authors authors={authors}/>
    </>
}