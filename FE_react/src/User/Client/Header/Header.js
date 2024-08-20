/* eslint-disable jsx-a11y/anchor-is-valid */

import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Button, Dropdown, Image, Modal, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "../../../API/User/User.API";
import { ToastContainer, toast } from "react-toastify";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const avatar = localStorage.getItem("avatar");
  const [isLogined, setIsLogined] = useState(false);
  const [user, setUser] = useState(null);
  console.log("🚀 ~ file: Header.js:16 ~ Header ~ user:", user);
  const [show, setShow] = useState(false);
  console.log("🚀 ~ file: Header.js:18 ~ Header ~ show:", show);

  const handleGo = () => {
    navigate("/user-profile");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("avatar");
    window.location.reload()
  };

  useEffect(() => {
    const isHomePage = isCurrentRoute("/user-profile");
    if (token) {
      const decoded = jwtDecode(token);

      if (decoded.exp * 1000 < new Date().getTime()) {
        setIsLogined(false);
        localStorage.removeItem("token");
        localStorage.removeItem("avatar");
        window.location.reload()
      }

      setIsLogined(true);
    }
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile();

        const detail = response.data.data.detailUser;

        setUser(detail);
        if (detail) {
          // Kiểm tra xem phoneNumber có tồn tại
          if (detail.phoneNumber === null || detail.address === null) {
            if (isHomePage) {
              console.log("🚀 ~ file: Header.js:54 ~ fetchUserProfile ~ isHomePage:", isHomePage)
              
              setShow(false);
            } else {
              setShow(true); // Hiển thị Modal
            }
          }
        }
      } catch (error) {
        const message = error.response.data.message;
        // toast.error(message);
      }
    };
    fetchUserProfile();
  }, []);

  const isCurrentRoute =  (patname) => {
    const currentPathname =  window.location.pathname
    console.log("🚀 ~ file: Header.js:72 ~ isCurrentRoute ~ currentPathname:", currentPathname)
    return currentPathname === patname;
  };
  return (
    <>
      <div style={{ padding: "0 100px" }} className="bg-light">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/" className="nav-link">
              <img
                src="https://giatui247.vn/web/image/website/1/logo/Gi%E1%BA%B7t%20%E1%BB%A7i%20247?unique=14cb38c"
                alt=""
              />
            </Link>
            <div
              className="collapse navbar-collapse ms-4"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-2">
                  <Link className="nav-link" to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item dropdown me-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dịch vụ
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link to="/premium" className="dropdown-item">
                        Giặt ủi cao cấp
                      </Link>
                    </li>
                    <li>
                      <Link to="/fast" className="dropdown-item">
                        Giặt sấy lấy liền
                      </Link>
                    </li>
                    <li>
                      <Link to="/dry" className="dropdown-item">
                        Giặt hấp - Giặt khô
                      </Link>
                    </li>
                    <li>
                      <Link to="/hotel" className="dropdown-item">
                        Giặt ủi khách sạn
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item me-2">
                  <Link
                    to="/uniform"
                    className="nav-link"
                    // onClick={handleCheck}
                  >
                    Đặt dịch vụ
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link to="/discount" className="nav-link">
                    Khuyến mãi/Event
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <a role="menuitem" href="#" className="nav-link ">
                    <span>Thảo luận/FAQs</span>
                  </a>
                </li>
                <li className="nav-item me-2">
                  <Link to="/about" className="nav-link">
                    Giới thiệu
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                {isLogined ? (
                  <ul class="nav nav-tabs">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Image
                          style={{
                            width: 40,
                            height: 40,
                          }}
                          src={avatar}
                          roundedCircle
                        />
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="/user-profile">
                            Hồ sơ cá nhân
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/orderstatus">
                            Đơn hàng
                          </a>
                        </li>

                        <li>
                          <a
                            class="dropdown-item"
                            href=""
                            onClick={handleLogout}
                          >
                            Đăng xuất
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                ) : (
                  <>
                    <button className="btn btn-primary me-3" onClick={() => navigate("/signIn")}>Đăng nhập</button>
                    <button className="btn btn-success" onClick={() => navigate("/signUp")}>Đăng kí</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <ToastContainer />
      <>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Mời bạn cập nhật thông tin cá nhân</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleGo}>
              Đến
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}
export default Header;
