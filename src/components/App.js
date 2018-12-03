import React, { Component } from 'react';
import '../styles/App.css';
import Card from './Card';
import data from '../cardData';
import headshot from '../profile.jpg';
import media from '../london.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Card 
          profileImageUrl={headshot}
          username={data.username}
          mediaUrl={media}
          like={data.liked}
          likes={data.likes}
          caption={data.caption}
          posted={data.posted}
       />
      </div>
    );
  }
}

export default App;
