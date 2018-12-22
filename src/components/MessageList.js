import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: [],
    }

    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount(){
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) });
    });
  }

  getRoomMessages(){
    const roomMessages = this.state.messages.filter( message => message.roomId == this.props.activeRoom);
    if(roomMessages.length === 0){
      return (<p>No messages in this room yet</p>);
    } 
    return roomMessages.map( (message, index) => 
              <p className="message" key={message.key}>
                <span className="userName">{message.userName}: </span>
                <span className="messageContent">{message.content}</span>
              </p>
    );
  }

  render(){
    
    
    return (
      <div className="messages">
        <h2>Messages</h2>
        {this.getRoomMessages()}
      </div>
    )
  }
}

export default MessageList;