import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../Client/Header/Header";
import { getUpdateUser, getUserProfile } from "../../../API/User/User.API";
import { handleUploadFile } from "../../../components/common/upload-images/upload-image.util";
import { useNavigate } from "react-router-dom";

function UserProfile(props) {
  const navigate = useNavigate();
  const avatar = localStorage.getItem("avatar");
  const [files, setFiles] = useState(null);
  console.log("🚀 ~ UserProfile ~ files:", files)
  const [user, setUser] = useState(null);
  console.log("🚀 ~ UserProfile ~ user:", user)
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile();

        const detailUser = response.data.data.detailUser;

        setUser(detailUser);
        localStorage.setItem("avatar", detailUser.avatar);
      } catch (error) {
        const message = error.response.data.message;
        toast.error(message);
        if (user === null) {
          navigate("/");
        }
      }
    };
    fetchUserProfile();
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "email") {
      toast.error("Bạn không được thay đổi email");
    }
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
        console.log("🚀 ~ handleUpdate ~ avatarImage:", avatarImage)
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
      // toast.error(message);
    }
  };
  const handleUploadImage = (event) => {
    const fileList = event.target.files;
    
    setFiles([...fileList]);
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
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
                    marginBottom: 30,
                  }}
                >
                  Thông tin tài khoản
                </h2>

                <Form>
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                    }}
                  >
                    <Form.Group className="mb-3 w-50" control Id="first Name">
                      <Form.Label className="ml-3">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập tên"
                        name="firstName"
                        default
                        Value={user.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50" control Id="last Name">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập họ"
                        name="lastName"
                        default
                        Value={user.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3" control Id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Nhập email"
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
                  <div style={{ display: "flex", marginTop: 30 }}>
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
          <div>loading API</div>
        )}
        <ToastContainer />
      </Container>
    </>
  );
}

export default UserProfile;
