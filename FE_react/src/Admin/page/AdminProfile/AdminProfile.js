import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import AdminHeader from "../../toolbar/AdminHeader";
import { getUpdateUser, getUserProfile } from "../../../API/User/User.API";
import { handleUploadFile } from "../../../components/common/upload-images/upload-image.util";
AdminProfile.propTypes = {};

function AdminProfile(props) {
  const avatar = localStorage.getItem("avatar");
  const [files, setFiles] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile();

        const { detailUser } = response.data.data;

        setUser(detailUser);
        localStorage.setItem("avatar", detailUser.avatar);
      } catch (error) {
        const message = error.response.data.message;
        toast.error(message);
      }
    };
    fetchUserProfile();
  }, []);
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      let avatarImage;
      avatarImage = avatar;
      if (files) {
        avatarImage = await handleUploadFile(files[0]);
        setUser({
          ...user,
          avatar: avatarImage,
        });
      }
      if (
        user.phoneNumber === null ||
        user.phoneNumber === "" ||
        user.phoneNumber.length < 10 ||
        user.phoneNumber.length > 11
      ) {
        toast.error("Số điện thoại phải từ 10 đến 11 số");
      } else if (user.address === null || user.address === "") {
        toast.error("Địa chỉ không được để trống");
      } else {
        const response = await getUpdateUser({
          ...user,
          avatar: avatarImage,
        });
        const message = response.data.message;
        toast.success(message);

        // setUpdateUser(null);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
    }
  };
  const handleUploadImage = (event) => {
    const fileList = event.target.files;
    setFiles([...fileList]);
  };
  return (
    <>
      <AdminHeader />
      <Container>
        {user ? (
          <>
            <Row>
              <Col
                md={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginTop: 50,
                }}
              >
                <Image
                  style={{
                    width: 200,
                    height: 200,
                  }}
                  src={files ? URL.createObjectURL(files[0]) : user.avatar}
                  roundedCircle
                />
              </Col>
              <Col md={6}>
                <h2
                  style={{
                    textAlign: "center",
                  }}
                >
                  Thông tin tài khoản
                </h2>
                <Form>
                  <Form.Group className="mb-3" control Id="first Name">
                    <Form.Label className="ml-3">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      default
                      name="firstName"
                      Value={user.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" control Id="last Name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      default
                      name="lastName"
                      Value={user.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" control Id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      default
                      value={user.email}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" control Id="address">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập địa chỉ"
                      name="address"
                      default
                      value={user.address}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" control Id="phone">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập số điện thoại"
                      name="phoneNumber"
                      default
                      value={user.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Hình ảnh đại diện</Form.Label>
                    <Form.Control
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg, image/gif"
                      onChange={handleUploadImage}
                      multiple
                    />
                  </Form.Group>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 30,
                    }}
                  >
                    <Button
                      variant="primary"
                      //   type="submit"
                      style={{
                        width: 150,
                      }}
                      onClick={handleUpdate}
                    >
                      Xác nhận
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </>
        ) : (
          <div>loading api</div>
        )}
        <ToastContainer />
      </Container>
    </>
  );
}

export default AdminProfile;
