import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import ChatRoomForm from './components/ChatRoomForm';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import User from './components/User';

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
      activeRoom: null,
      user: null,
    };

    this.changeRoom = this.changeRoom.bind(this);
    this.setUser = this.setUser.bind(this);

  }

  changeRoom (roomKey) {
    this.setState({activeRoom: roomKey});
  }

  setUser (user) {
    this.setState({user: user});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bloc Chat</h1>
        </header>
        <User 
          firebase={firebase} 
          setUser={this.setUser}
          user={this.state.user}
        />
        <RoomList 
          firebase={firebase} 
          changeRoom={this.changeRoom} 
          activeRoom={this.state.activeRoom}
        />
        <ChatRoomForm firebase={firebase} />
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
        <MessageForm firebase={firebase} activeRoom={this.state.activeRoom} user={this.state.user} />
      </div>
    );
  }
}

export default App;
