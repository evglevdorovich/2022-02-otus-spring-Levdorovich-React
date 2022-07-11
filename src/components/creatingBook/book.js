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
            <select {...register("genre")} id="genre-select" name="genre">
                {genres.map((genre) =>
                    <option value={genre._links.self.href} key={genre._links.self.href}>{genre.name}</option>
                )}
            </select>
        </label>
        <label className="creating-book--label" htmlFor="author-select">Choose an author
            <select {...register("author")} id="author-select" name="author">
                {authors.map((author) =>
                    <option value={author._links.self.href} key={author._links.self.href}>{author.name}</option>
                )}
            </select>
        </label>
        <input className="add-icon creating-book--add-icon" type="image" src="../src/assets/add-icon.svg"
               alt="add-icon"/>
    </form>
        <p className="creating-book--warning">{errors.name?.message ? errors.name.message : null}</p>
    </>
};