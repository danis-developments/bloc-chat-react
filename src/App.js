import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import ChatRoomForm from './components/ChatRoomForm';

var config = {
  apiKey: "AIzaSyB5P7U-ahTOcLWA5hqvwHWhZ-RMkbrMZA4",
  authDomain: "dansdevelopments-bloc-chat.firebaseapp.com",
  databaseURL: "https://dansdevelopments-bloc-chat.firebaseio.com",
  projectId: "dansdevelopments-bloc-chat",
  storageBucket: "dansdevelopments-bloc-chat.appspot.com",
  messagingSenderId: "396163843785"
};
firebase.initializeApp(config);


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bloc Chat</h1>
        </header>
        <RoomList firebase={firebase} />
        <ChatRoomForm firebase={firebase} />
      </div>
    );
  }
}

export default App;
