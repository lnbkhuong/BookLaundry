import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LoginAPI } from "../../../API/Auth/Auth.api";
import { errorHandle } from "../../../error/error.util";
function AdminSignIn(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handChangeEmailValue = (e) => {
    setEmail(e.target.value);
  };

  const handChangePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const handLogin = async () => {
    try {
      if (email !== null || password !== null) {
        const response = await LoginAPI(email, password);
        console.log("🚀 ~ handLogin ~ response:", response)
        const message = response.data.message;

        const accessToken = response.data.accessToken;
        const avatar = response.data.avatar;
        const role = response.data.role;
        if (role === 1 || role === 2) {
          localStorage.setItem("token", accessToken);
          localStorage.setItem("avatar", avatar);
          toast.success(message);
          setTimeout(() => {
            navigate("/admin");
          }, [1000]);
        } else {
          toast.error("Bạn không phải Quản trị viên");
        }
      }
      else{
        toast.error("Mời bạn nhập đầy đủ thông tin để đăng nhập");
      }
    } catch (error) {
      const message = error.response.data.message;
      errorHandle(message, toast);
    }
  };
  return (
    <div className="App">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Đăng nhập</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={email}
                          onChange={handChangeEmailValue}
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
                          onChange={handChangePasswordValue}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!" style={{
                            textDecoration: "none"
                          }}>
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          //   type="submit"
                          onClick={handLogin}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a
                          href="/admin/signup"
                          className="text-primary fw-bold"
                          style={{
                            textDecoration: "none"
                          }}
                        >
                          Sign Up
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
}

export default AdminSignIn;
