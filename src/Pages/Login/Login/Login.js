import React from "react";
import "./Login.css";
import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory, Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
const Login = () => {
    const{usingGoogleSignin}=useFirebase()
  const [success, setSuccess] = useState("");
  const [showState, setShowState] = useState(false);
  const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const handleForm=e=>{
    e.preventDefault();
 }
  return (
    <div className="auth-home">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={5} className="mx-auto">
            <div className="login-container p-5 my-5 rounded-1 ">
              <h2 className="font-monospace fw-bold text-center">Login</h2>
              <br />
              <p className="text-center">Or Sign Using </p>
              <div className="icon-parent">
                <button className="border-0"  
                onClick={usingGoogleSignin}>
                <img className="img-icon" src='/images/google.png'alt=""/>
                </button>
                <img className="img-icon" src='/images/github.png'alt="" />
                <img className="img-icon" src='/images/twitter.png'alt="" />
              </div>
              <Form onSubmit={handleForm}>
                <Form.Group controlId="validationCustomUsername">
                  <p className="text-center text-success">
                    <span className="text-white">he</span>
                    {success}{" "}
                    {success.length > 1 && <i class="far fa-check-circle"></i>}
                  </p>
                  <Form.Label>Your Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepen">
                      <i className="far text-primary  fa-user"></i>
                    </InputGroup.Text>
                    <Form.Control
                      className="input-field"
                      type="email"
                      placeholder="Enter your name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <br />
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="fas fa-unlock-alt text-primary"></i>
                    </InputGroup.Text>
                    <Form.Control
                      className="input-field"
                      onBlur={(e) => setPassword(e.target.value)}
                      type={showState ? "text" : "password"}
                      placeholder="Enter your password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <InputGroup.Text
                      onClick={() => setShowState(!showState)}
                      className="toggleIcon"
                      id="inputGroupPrepend"
                    >
                      <i
                        className={
                          showState ? "far fa-eye-slash" : "far fa-eye"
                        }
                      ></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <p className="text-end my-3 forgot-text">Forgot password?</p>

                <p className="text-danger d-block">
                  <span className="text-white">h</span>
                  {error}
                </p>
                <button className="login-btn">LOGIN</button>

                <p className="text-center mt-5">
                  Are You New ?{" "}
                  <NavLink to="/register">Rlease Register</NavLink>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;