import React from "react";
import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [showState, setShowState] = useState(false);
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="auth-home">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} className="mx-auto">
            <div className="login-container p-5 my-5 rounded-1 ">
              <h2 className="font-monospace fw-bold text-center">
                Create New Account
              </h2>
              <br />
              <p className="text-center">Or Sign Using </p>
              <div className="icon-parent">
                <img className="img-icon"
                  src='/images/google.png' alt="" />
                <img className="img-icon" src='/images/gihub.png' alt="" />
                <img className="img-icon" src='/images/twitter.png' alt="" />
              </div>
              <Form onSubmit={""}>
                <Form.Group controlId="validationCustomUsername">
                  <p className="text-center text-success">
                    <span className="text-white"></span>
                    {success}{" "}
                    {success.length > 1 && <i class="far fa-check-circle"></i>}
                  </p>
                  <Form.Label>Your Name</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="far text-primary  fa-user"></i>
                    </InputGroup.Text>
                    <Form.Control
                      onBlur={""}
                      className="input-field"
                      type="text"
                      placeholder="Enter your name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <br />
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Your Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="far text-primary  fa-user"></i>
                    </InputGroup.Text>
                    <Form.Control
                      onBlur={""}
                      className="input-field"
                      type="email"
                      placeholder="Enter your Email"
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
                {!isLogin ? (
                  <p className="text-end my-3 text-white">hello</p>
                ) : (
                  <p className="text-end my-3 forgot-text" onClick={""}>
                    Forgot password?
                  </p>
                )}
                <p className="text-danger d-block">
                  <span className="text-white">h</span>
                  {error}
                </p>
                <button className="login-btn">Register</button>
                <p className="text-center mt-5">
                  Already Have An Accout ?{" "}
                  <NavLink to="/login">Please Login</NavLink>{" "}
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;