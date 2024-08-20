import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
// import { signUpService } from "../services/auth/auth.service";
import { Link, useNavigate } from "react-router-dom";
import { SignUpAPI } from "../../../API/Auth/Auth.api";
import { errorHandle } from "../../../error/error.util";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [signUpPayLoad, setSignUpPayLoad] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: 3
  });

  const handChangeSignUpPayLoad = (event) => {
    setSignUpPayLoad({
      ...signUpPayLoad,
      [event.target.name]: event.target.value,
    });
  };

  const handSignUp = async () => {
    try {
      if (confirmPassword === password) {
        const response = await SignUpAPI(signUpPayLoad);
        const message = response.data.message;
        toast.success(message);
        setTimeout(() => {
          navigate("/signIn");
        }, [5000]);
      } else {
        toast.error("Password không trùng khớp");
      }
    } catch (error) {
      const message = error.response.data.message;
      // toast.error(message);
      errorHandle(message,toast)
    }
  };
  const { firstName, lastName, email, password, confirmPassword, role } =
    signUpPayLoad;

  return (
    <div className="App">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <Link to="/" className="nav-link">
                    <img
                      src="https://giatui247.vn/web/image/website/1/logo/Gi%E1%BA%B7t%20%E1%BB%A7i%20247?unique=14cb38c"
                      alt=""
                    />
                  </Link>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form>
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                        }}
                      >
                        <Form.Group
                          className="mb-3 w-50"
                          controlId="formBasicEmail"
                        >
                          <Form.Label className="text-center">
                            First Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            name="firstName"
                            value={firstName}
                            onChange={handChangeSignUpPayLoad}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 w-50"
                          controlId="formBasicEmail"
                        >
                          <Form.Label className="text-center">
                            Last Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            name="lastName"
                            value={lastName}
                            onChange={handChangeSignUpPayLoad}
                          />
                        </Form.Group>
                      </div>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={email}
                          onChange={handChangeSignUpPayLoad}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={handChangeSignUpPayLoad}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={handChangeSignUpPayLoad}
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          variant="info"
                          // type="submit"
                          onClick={handSignUp}
                        >
                          Sign Up
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        You have an account?{" "}
                        <a
                          href="/signIn"
                          className="text-info fw-bold"
                          style={{
                            textDecoration: "none"
                          }}
                        >
                          Login here
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default RegisterComponent;
