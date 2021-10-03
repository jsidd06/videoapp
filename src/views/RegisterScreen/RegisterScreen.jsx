import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterScreen() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const registerHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/v1/user/login", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: password,
    });
  };
  return (
    <>
      <Container className="text-center" style={{ width: 500, marginTop: 200 }}>
        <Form>
            <h2>Register</h2>
          <FormGroup>
            <Label className="m-2">First Name</Label>
            <Input
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
            />
          </FormGroup>
          <FormGroup>
            <Label className="m-2">Last Name</Label>
            <Input
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
            />
          </FormGroup>
          <FormGroup>
            <Label className="m-2">Email</Label>
            <Input type="email" onChange={(e) => setEmail(e.target.value)}placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label className="m-2">Username</Label>
            <Input type="username" onChange={(e) => setUsername(e.target.value)} placeholder="enter username" />
          </FormGroup>
          <FormGroup>
            <Label className="m-2">Password</Label>
            <Input type="password" onChange={(e) => setPassword(e.target.value)}placeholder="enter password" />
          </FormGroup>
          <Button onClick={registerHandler} className="m-2">Register Now</Button> <br />
          <Link to="/login">Login</Link>
        </Form>
      </Container>
    </>
  );
}

export default RegisterScreen;
