import React, {useContext, useState} from "react";
import {Form, Button, Container} from "react-bootstrap";
import {useAuth} from "../context/auth";
import { GlobalContext } from "../context/GlobalState";

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    const {doLogin} = useContext(GlobalContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            userName: userName,
            password: password
        }
        
        doLogin(formData);

        setUserName("");
        setPassword("");

    }
  return (
      <Container>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" 
                    placeholder="Enter email" 
                    value={userName}
                    onChange= {e => setUserName(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange = {e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" 
                type="submit">
                Submit
            </Button>
        </Form>
      </Container>
    
  );
}

export default Login;