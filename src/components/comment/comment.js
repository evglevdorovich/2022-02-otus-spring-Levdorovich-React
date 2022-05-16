import React, {useEffect, useState} from 'react';
import propTypes from './props'
import {Link, useParams} from "react-router-dom";
import '../../style.css'
import * as api from '../../api/comment'

Comments.propTypes = propTypes;

export default function Comments() {
    const {id} = useParams();
    let [comments, setComments] = useState([]);
    let [commentsDownloaded, setCommentsDownloaded] = useState(false);

    useEffect(() => {
        api.getByBookId(id).then((com) => setComments(com))
            .then(() => setCommentsDownloaded(true))
    }, []);


    return !commentsDownloaded ? null :  <div className="flex flex--comment-table">
        <table className="comments-table">
            <caption className="comments-table--caption">Comments</caption>
            <thead>
            <tr>
                <th>ID</th>
                <th>Text</th>
            </tr>
            </thead>
            <tbody>
            {comments.map((com) => <tr key={com.id}>
                <td>{com.id}</td>
                <td>{com.text}</td>
            </tr>)
            }
            </tbody>
        </table>
        <Link to="/">
            <img className="return-icon" src="../src/assets/return-icon.svg" alt="return-icon"/>
        </Link>
    </div>
};