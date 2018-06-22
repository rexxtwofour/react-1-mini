import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super(); 
      this.state = {
      picture: 'thispic',
      name: 'rexx',
      friends: [{
        name: 'My 404 friend',
        picture: 'https://http.cat/404'
      }, {
        name:'My cat with the muchies',
        picture: 'https://http.cat/420'
      }]
    };
  }
    changeName (event){
      this.setState({
        name: event.target.value
      })
      
    }
    newPicture (picture){
      this.setState({
        picture: picture.target.value
      })
    }

    addFriend(){
      const newFriend = {
        name: this.state.name,
        picture: this.state.picture,
      };
      this.setState({
        friends: this.state.friends.concat(newFriend)
      });
    }

  render() {
    return (
      <div>
        Name: <input value={this.state.name} onChange={(event) => this.changeName(event)} />
       
        picture: <input value={this.state.picture} onChange ={(event) => this.newPicture(event)} />

        <button onClick={() => this.addFriend()}>Add friend</button>

        <div> 
          {this.state.friends.map(friend => {
            console.log('friends', friend);
            return (
              <div>
                <p><img src = {friend.picture} alt= {friend.name}/> state.name</p>
              </div>
            )
          })}
        </div>
      </div>

    );
  }
}

export default App;
