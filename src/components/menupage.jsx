import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import './menupage.css';

class MenuPage extends Component {
    state = {  
        ChatroomID:'',
    }
    routeToChatroom = () => {
        this.props.history.push('/Chatroom/'+this.state.ChatroomID);
    }

    onChangeChatroomID = event => {
        this.setState({ChatroomID:event.target.value});
    }
    createChatroom = event => {
        console.log(event.target.value);
    } 
    render() {
        return (
        <div className="menuWrapper">
            <div className="menuHeader">
                <div className="menuHeaderUsername">
                    <h1>username:{localStorage.getItem('username')}</h1>
                </div>
                <div className="menuHeaderName">
                <h1>Menu Page</h1>
                </div>
            </div>
            <div className="formWrapper">
            <Form.Group className="chatroomIdInput" controlId="formChatroomID"> 
                        <Form.Label>Enter Chatroom</Form.Label>
                        <Form.Control onChange={this.onChangeChatroomID}  placeholder="Enter Chatroom ID" /> 
                    </Form.Group>    
            <Button onClick={this.routeToChatroom} variant="primary"> Enter</Button>
            </div>
            <div className="createButton">
                <text>Or create a new chatroom</text>
                    <div>
                         <Button onClick={this.createChatroom}> Create Chatroom </Button>
                    </div>
            </div>
            
        </div>
        )
    }
}
 
export default MenuPage;