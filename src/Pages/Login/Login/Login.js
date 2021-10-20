import React from "react";
import "./Login.css";
import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import { emptyInputField } from "../../../utilities/utilities";
const Login = () => {
  // const [success, setSuccess] = useState("");
  const [showState, setShowState] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {
    googleSignIn,
    loginWithEmail,
    setError,
    setUser,
    error,
    setIsLoading,
    githubSignin
  } = useAuth();
  
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || '/';

  // process login function 
  const processLogin = () => {
    loginWithEmail(email, password)
      .then(result => {
        setUser(result.user);
        setError("");
        history.push(redirect_uri);
        // emptyInputField();
      }).catch(err => {
        if (err.message.includes("user-not-found")) {
          setError("Invalid Email and Password");
        }
      })
  }
  // handlegoogle signin
  const handleGoogleSignin = () => {
    setIsLoading(true)
    googleSignIn()
      .then((result) => {
        setUser(result.user)
        setError('')
        history.push(redirect_uri);
      }).catch((error) => {
        setError(error.message)
      }).finally(() => {
        setIsLoading(false)
      })

  }
  // handleGithub sign in
  const handleGithubsignin = () => {
    githubSignin()
      .then((result) => {
        setUser(result.user)
        setError('')
        history.push(redirect_uri);
      }).catch((error) => {
        setError(error.message)
      }).finally(() => {
        setIsLoading(false)
      })

  }



  // handle login submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    processLogin();
  }
  // email validation function 
  const handleEmail = (e) => {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!emailRegex.test(e.target.value)) {
      setError("Invalid Email Address");
    } else {
      setError(" ");
      setEmail(e.target.value);
    }
  };
  return (
    <div className="auth-home">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6} className="mx-auto">
            <div className="login-container p-5 my-5 rounded-1 ">
              <h2 className="font-monospace fw-bold text-center">Login</h2>
              <br />
              <p className="text-center">Or Sign Using </p>
              <div className="icon-parent">
                <img
                  onClick={handleGoogleSignin}
                  className="img-icon"
                  src='/images/google.png'
                  alt=""
                />
                <img
                  onClick={handleGithubsignin}
                  className="img-icon" src='/images/github.png' alt="" />
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Your Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepen">
                      <i className="far fa-envelope-open text-primary"></i>
                    </InputGroup.Text>
                    <Form.Control
                      onBlur={handleEmail}
                      className="input-field"
                      id="login-email"
                      type="email"
                      placeholder="Enter your name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="fas fa-unlock-alt text-primary"></i>
                    </InputGroup.Text>
                    <Form.Control
                      className="input-field"
                      id="login-password"
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

                <p className="text-end ">Forgot password?</p>

                <p className="text-danger d-block">
                  <span className="text-white"></span>
                  {error}
                </p>
                <button className="login-btn">LOGIN</button>

                <p className="text-center">
                  Are You New ?{" "}
                  <NavLink to="/register">Please Register</NavLink>
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