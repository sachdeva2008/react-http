import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick = {props.Clicked}>
        {props.title}
        <div className="Info">
            <div className="Author">{props.Author}</div>
        </div>
    </article>
);

export default post;
