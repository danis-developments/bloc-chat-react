import React, {Component} from 'react';

class User extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signInWithPopUp(){
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut(){
    this.props.firebase.auth().signOut();
  }

  render(){
    return(
      <div className="user">
        <p><strong>Current User: </strong>{this.props.user ? this.props.user.displayName : 'No User Currently Logged In'}</p>
        <button className="user-button" id="sign-in-button" type="button" onClick={ () => this.signInWithPopUp() }>Sign In</button>
        <button className="user-button" id="sign-out-button" type="button" onClick={ () => this.signOut()}>Sign Out</button>
      </div>
      );
  }
}

export default User;