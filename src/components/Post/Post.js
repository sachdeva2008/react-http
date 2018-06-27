import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        {props.title}
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;
