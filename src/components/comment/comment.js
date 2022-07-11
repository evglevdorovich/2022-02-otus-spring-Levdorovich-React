import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import '../../style.css'
import * as api from '../../api/comment'

export default function Comments() {
    const {id} = useParams();
    let [comments, setComments] = useState([]);
    let [commentsDownloaded, setCommentsDownloaded] = useState(false);

    useEffect(() => {
        api.getByBookId(id).then((com) => setComments(com._embedded.comments))
            .then(() => setCommentsDownloaded(true))
    }, []);

    return !commentsDownloaded ? null :  <div className="flex flex--comment-table">
        <table className="comments-table">
            <caption className="comments-table--caption">Comments</caption>
            <thead>
            <tr>
                <th>Text</th>
            </tr>
            </thead>
            <tbody>
            {comments.map((com) => <tr key={com._links.self.href}>
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