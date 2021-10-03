import React, { useEffect, useState } from "react";
import { Container, Form, Input, Label, Button, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/v1/user/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Container className="text-center" style={{ width: 500, marginTop: 250 }}>
        <Form>
          <h2>Login</h2>
          <FormGroup>
            <Label className="m-2">Username</Label>
            <Input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup>
            <Label className="m-2">Password</Label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </FormGroup>
          <Button type="submit" className="m-2" onClick={loginHandler}>
            Login
          </Button>
          <br />
          <Link to="/register">Create an Account</Link>
        </Form>
      </Container>
    </>
  );
}

export default LoginScreen;
