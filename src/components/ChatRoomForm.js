import React, {Component} from 'react';

class ChatRoomForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'New Room Name',
    }
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }
  
  handleChange(e){
    console.log(e.target.value);
    this.setState({name: e.target.value})
  }
  
  handleSubmit(e){
    this.roomsRef.push({
      name: this.state.name,
    });
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Create Chat Room:
          <input id="newRoomName" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        </label>
        <input type="submit" value="Create Room" />
      </form>
    );
  }
}

export default ChatRoomForm;