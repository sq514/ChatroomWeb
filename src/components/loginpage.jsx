import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import amex from './amex.png';
// or less ideally
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { nullLiteral } from '@babel/types';


class LoginPage extends Component {
    state={
        username:'',
        password:''
    }


    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    onChangeUsername = event =>{
        this.setState({username: event.target.value});
    }
    onChangePassword = event =>{
        
        this.setState({password: event.target.value});       
    }


    routeChange = () => {
        this.props.history.push('/menu');
    }

    handleOnClick = () => {
        axios.get('http://172.16.37.248:8080/loginValidation',{
            params: {
              username:this.state.username,
              password:this.state.password,
            }
          })
            .then(response =>{
                const result= response.data.result;
                if(result==true){
                    localStorage.setItem('username', this.state.username);
                    this.routeChange();
                }else{
                    alert("password wrong")
                }
            })
            .catch()


    }
   

    render(){ 
        const {password} = this.state;
        const {handleOnClick} = this;
        const logoStyle = {
            marginTop: '5%',
            
        }

        const fromWrapperStyle={
            textAlign: 'center',
        }
        const wrapperStyle = {
            textAlign: 'center',
            marginLeft: '25%',
            marginTop: '10%',
            width: '50%' ,
            height: '50%' ,
            textAlign: 'center',
        }
        return (
        <div class="wrappper" style={wrapperStyle}>
            <img src={amex} style={logoStyle} height="150" width="250"/>
            <div style={fromWrapperStyle}>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.onChangeUsername}  placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>   
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={this.onChangePassword} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button  onClick={handleOnClick} variant="primary" type="submit">
                        Submit
                    </Button>

            </div>
        </div>
        )
    }
}
 
export default LoginPage;