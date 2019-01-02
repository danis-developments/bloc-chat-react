import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class MessageForm extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      newMessage: '',
    }
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  handleChange(e){
    this.setState({newMessage: e.target.value});
  }

  handleSubmit(e){
    if(!this.props.user){
      alert("you must be logged in to post a messages");
    } else if (!this.props.activeRoom){
      alert("you must select a room before posting a message");
    } else {
      const messageObj = {
        userName: this.props.user.displayName,
        content: this.state.newMessage,
        roomId: this.props.activeRoom,
        sentAt: Date.now(),
      };
      this.messagesRef.push(messageObj);
      this.setState({newMessage:''});
    }
    e.preventDefault();
  }

  render(){
    return(
      <div className="row">
        <form className="col s12" onSubmit={(e)=>this.handleSubmit(e)}>
          <div className="row">
            <div className="input-field col s9 l10">
              <input placeholder="Write your message here..." id="new_message" type="text" value={this.state.newMessage}  onChange={(e)=>this.handleChange(e)}></input>         
            </div>
            <div className="input-field col s3 l2">
              <button placeholder="Write your message here..." className="btn right"  type="submit">
                <i className="material-icons small left">send</i>
                Send Message
             </button>         
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;