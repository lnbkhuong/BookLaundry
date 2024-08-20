import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AdminHeader from "../../toolbar/AdminHeader";
import AdminMenu from "../../toolbar/AdminMenu";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  getUpdateUserforAdmin,
  getUserProfileforAdmin,
} from "../../../API/User/User.API";
import { useNavigate, useParams } from "react-router-dom";
function UsersProfile(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [updateUser, setUpdateUser] = useState(null);
  console.log(
    "🚀 ~ file: UserProfile.js:17 ~ UserProfile ~ updateUser:",
    updateUser
  );
  console.log("🚀 ~ file: UserProfile.js:15 ~ UserProfile ~ user:", user);

  const { id } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfileforAdmin(Number(id));

        const { getOneUser } = response.data.data;

        setUser(getOneUser);
        // setUpdateUser(getOneUser);
      } catch (error) {
        const message = error.response.data.message;
        toast.error(message);
      }
    };
    fetchUserProfile();
  }, []);

  const handleBack = () => {
    navigate("/admin/user");
  };

  const handleChange = (event) => {
    if (event.target.name === "role") {
      setUser({
        ...user,
        [event.target.name]: Number(event.target.value),
      });
      return;
    }
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await getUpdateUserforAdmin(Number(id), user);
      const message = response.data.message;

      toast.success(message);
      // setUpdateUser(null);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
    }
  };
  return (
    <div>
      <AdminHeader />
      <AdminMenu />
      <div
        style={{
          margin: 30,
          marginLeft: 250,
        }}
      >
        <Container>
          {user ? (
            <>
              <Row>
                <Col
                  md={6}
                  style={{
                    marginLeft: 100,
                  }}
                >
                  <h2
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Profile
                  </h2>
                  <Form>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Form.Group className="mb-2 w-50" control Id="first Name">
                        <Form.Label className="ml-3">First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter first name"
                          default
                          Value={user.firstName}
                          required
                          disabled
                        />
                      </Form.Group>
                      <Form.Group className="mb-2 w-50" control Id="last Name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter last name"
                          default
                          Value={user.lastName}
                          disabled
                        />
                      </Form.Group>
                    </div>

                    <Form.Group className="mb-2" control Id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        default
                        value={user.email}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" control Id="phone">
                      <Form.Label>Số điện thoại</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        default
                        value={user.phoneNumber}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" control Id="address">
                      <Form.Label>Địa chỉ</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        default
                        value={user.address}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label className="mr-5">
                        Vai trò <span className="text-danger">*</span>
                      </Form.Label>
                      <div>
                        <Form.Check
                          inline
                          type="radio"
                          name="role"
                          label="Khách hàng"
                          id="role-1"
                          value={3}
                          checked={user.role === 3}
                          onChange={handleChange}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="role"
                          label="Nhân viên"
                          id="role-2"
                          value={2}
                          checked={user.role === 2}
                          onChange={handleChange}
                        />
                      </div>
                    </Form.Group>
                    <div style={{ display: "flex" }}>
                      <Button
                        variant="primary"
                        //   type="submit"
                        style={{
                          width: 100,
                        }}
                        onClick={handleUpdate}
                      >
                        Xác nhận
                      </Button>
                      <Button
                        variant="danger"
                        //   type="submit"
                        style={{
                          width: 100,
                          margin: "auto",
                        }}
                        onClick={handleBack}
                      >
                        Quay lại
                      </Button>
                    </div>
                  </Form>
                </Col>
                <Col
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 200,
                      height: 200,
                    }}
                    src={user.avatar}
                    roundedCircle
                  />
                </Col>
              </Row>
            </>
          ) : (
            <div>loading api</div>
          )}
          <ToastContainer />
        </Container>
      </div>
    </div>
  );
}

export default UsersProfile;
