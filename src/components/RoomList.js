import React, {Component} from 'react';
import "./RoomList.css"
class RoomList extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: [],
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount(){
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room )});
    });
  }

  handleRoomClick(roomKey){
    this.props.changeRoom(roomKey);
  }

  render(){
    return (
      <div className="chat-room-names">
        <h2>Chat Rooms</h2>
          {this.state.rooms.map( (room) => 
          <p 
            key={room.key} 
            className={room.key === this.props.activeRoom ? "activeRoom" : "room"}
            onClick={(roomKey) => this.handleRoomClick(room.key)} 
          >{room.name}</p>
          )}
      </div>
    );
  }
}

export default RoomList;