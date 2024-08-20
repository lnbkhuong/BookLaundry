import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";

AdminHeader.propTypes = {};

function AdminHeader(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const avatar = localStorage.getItem("avatar");
  // console.log("🚀 ~ file: AdminHeader.js:18 ~ AdminHeader ~ avatar:",typeof avatar)
  const [isLogined, setIsLogined] = useState(false);
  const handleOpenUserProfile = () => {
    navigate("/admin/userProfile");
  };

  const handleLogout = () => {
    navigate("/admin/signin");
    localStorage.removeItem("token");
    localStorage.removeItem("avatar");
  };

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);

      if (decoded.exp * 1000 < new Date().getTime()) {
        setIsLogined(false);
        navigate("/admin/signin");
        localStorage.removeItem("token");
        localStorage.removeItem("avatar");
      }

      setIsLogined(true);
    }
    else{
      navigate("/admin/signin");
    }
  }, []);
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/admin">Trang chủ</Navbar.Brand>
        <Navbar.Collapse
          className="justify-content-end gap-5"
          style={{
            color: "white",
          }}
        >
          {isLogined ? (
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" size="sm">
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  src={avatar}
                  roundedCircle
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleOpenUserProfile}>
                  Hồ sơ của bạn
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Nav.Link href="/admin/signin">Đăng nhập</Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;
