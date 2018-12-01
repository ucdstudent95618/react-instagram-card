import React from 'react';
import Header from './Header';
import Media from './Media';

const Card = props => (
<div className="card">
    <Header 
        profileImageUrl={props.profileImageUrl}
        username={props.username} />
    <Media 
        mediaUrl={props.mediaUrl}/>
</div>
);

export default Card;