import React, { Component } from 'react';
import { ListGroup, ListGroupItem, InputGroup } from 'react-bootstrap';
import './chatroompage.css';
import axios from 'axios';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import StackUtils from 'stack-utils';
class chatroomPage extends Component {
    users=[
        {username:'user1'},
        {username:'user2'},
        {username:'user3'},
        {username:'user4'},
        {username:'user5'},
    ]
    state={
        instantMessage:'',
        messageList:[
        ],
        username:'',
        chatroomId:"123",
    }
    onChangeMessage = event =>{
        this.setState({instantMessage:event.target.value})
    }

    updateChatroom = () => {
        axios.get('http://172.16.37.248:8080/updateChatroom',{
            params: {
              chatroomId:this.state.chatroomId,
            }
          })
            .then(response =>{
                const result= response.data;
                this.setState({messageList:result})
            })
            .catch()
    }
    sendMessage = () =>{
        axios.get('http://172.16.37.248:8080/sendMessage',{
            params: {
              username:this.state.username,
              enteredMessage:this.state.instantMessage,
              chatroomId:this.state.chatroomId,
            }
          })
            .then(response =>{
                const result= response.data;
                if(!result){
                    alert("something went wrong")
                }
            })
            .catch()
        this.setState({instantMessage : ""});
    }

    componentDidMount(){
        this.setState({username: localStorage.getItem('username')});
        this.interval = setInterval(this.updateChatroom, 2000);

    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
     
    render() { 
        
        return (
            <div className="chatroomWrapper">
                <div className="chatroomHeader"> 
                 <h1>Chatroom Page</h1>
                </div> 

                <div className="chatroom">
                    <div className="userList">
                        <ul>
                            {this.users.map(user => 
                                {
                                    return<li><img height="25px" width="25px" src={require('../../resource/image2.png')}/>{user.username}</li>
                                }
                            )}
                        </ul>
                    </div> 

                    <div className="chatArea">
                        <div className="chatContent">
                                {this.state.messageList.map(messageObject => {
                                    if(messageObject.username==this.state.username){
                                        return <div className="myMessage">
                                            <img height="25px" width="25px"  src={require('../../resource/image2.png')}/>
                                        <p>{messageObject.messageContent}</p>
                                                </div>
                                        }
                                    else{
                                        return <div className="otherMessage"> <img height="25px" width="25px"  src={require('../../resource/image2.png')}/>
                                        <p >{messageObject.messageContent}</p>
                                                </div>
                                    }
                                })}
                        </div>
                        <div className="chatInputArea">
                        <div className="inputArea" >
                            <textarea value={this.state.instantMessage} type="text" onChange={this.onChangeMessage}/>
                            <button onClick={this.sendMessage}>Enter</button>
                        </div>
                        </div>
                    </div>
                </div>          
            </div>
              
        );
    }
}
 
export default chatroomPage;