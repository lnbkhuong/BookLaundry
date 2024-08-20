import React from "react";
import PropTypes from "prop-types";
import { FaTasks, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { Link } from "react-router-dom";
const AdminMenu = (props) => {
  return (
    <div className="d-flex home">
      <div
        className="d-flex sidebar flex-column flex-shrink-0  bg-body"
        style={{
          width: 220,
          height: "100vh",
          position: "fixed",
        }}
      >
        <ul className="nav nav-pills flex-column mb-auto px-0 mt-4 ms-2">
          <li className="nav-item ">
            <Link to="/admin/user" className="nav-link text-primary mb-2">
              <FaRegUser /> <span className="ms-2">Quản Lý Người Dùng</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/admin/order" className="nav-link text-primary mb-2">
              <IoCartOutline /> <span className="ms-2">Quản Lý Đơn Hàng</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/admin/service" className="nav-link text-primary mb-2">
              <CgSmartHomeWashMachine /> <span className="ms-2">Quản Lý Dịch Vụ</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

AdminMenu.propTypes = {};

export default AdminMenu;
