import React, {useEffect} from 'react';
import propTypes from './props'
import '../../style.css'
import {useForm} from 'react-hook-form'

Book.propTypes = propTypes;
const warning = `Can't be an empty string for name in input`

export default function Book({genres, authors, onCreate}) {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return <><h1 className="creating-book--header">Creating Book</h1>
    <form className="flex creating-book--form" onSubmit={handleSubmit((data) => {onCreate(data)})}>
            <label className="creating-book--label flex creating-book--form" htmlFor="create-book-name">Enter book name
                <input {...register("name", {required: warning})}
                       id="create-book-name"
                       type="text"
                       name="name"
                />
            </label>
        <label className="creating-book--label" htmlFor="genre-select">Choose a genre
            <select {...register("genreId")} id="genre-select" name="genreId">
                {genres.map((genre) =>
                    <option value={genre.id} key={genre.id}>{genre.name}</option>
                )}
            </select>
        </label>
        <label className="creating-book--label" htmlFor="author-select">Choose an author
            <select {...register("authorId")} id="author-select" name="authorId">
                {authors.map((author) =>
                    <option value={author.id} key={author.id}>{author.name}</option>
                )}
            </select>
        </label>
        <input className="add-icon creating-book--add-icon" type="image" src="../src/assets/add-icon.svg"
               alt="add-icon"/>
    </form>
        <p className="creating-book--warning">{errors.name?.message ? errors.name.message : null}</p>
    </>
};