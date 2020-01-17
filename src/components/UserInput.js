import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import  Form from 'react-bootstrap/Form';


export class UserInput extends Component {

    state = {
        email: ''
    }

   
    render() {
        return (
            <div style={root}>
                <Form onSubmit={this.onSubmitEmail}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={inputStyle}>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.emailInput} onChange={this.onChange} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }

    onSubmitEmail = (e) => {
        axios.post('http://127.0.0.1:8080/api/email/'+this.state.email)
            .then(res => console.log(res) )
            .catch(err => console.log(err) ); 

        
        this.setState({ email: ''});
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

}

export default UserInput;


const root = {
    width: '24%',
    margin: 'auto',
    padding: '10px'
}

const inputStyle = {
    textAlign: 'center',
    color: 'white'
}


