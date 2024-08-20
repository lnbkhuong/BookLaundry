import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { SiVerizon } from "react-icons/si";
import { FaBan } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../toolbar/AdminHeader";
import AdminMenu from "../../toolbar/AdminMenu";
import { getAllUser } from "../../../API/User/User.API";
import { Badge } from "react-bootstrap";
import { all } from "axios";

Users.propTypes = {};

function Users(props) {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState(null);
  console.log("🚀 ~ file: Users.js:29 ~ Users ~ allUsers:", allUsers);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPage, setTotalPage] = useState(null);
  const [total, setTotal] = useState(0);

  const paginationButton = [];

  const handleChangePage = (index) => {
    setPage(index);
  };

  const handleChangePerPage = (event) => {
    setPerPage(event.target.value);
  };

  for (let index = 1; index <= totalPage; index++) {
    paginationButton.push(
      <Button
        onClick={() => handleChangePage(index)}
        key={index}
        variant={index === page ? "primary" : "outline-primary"}
      >
        {index}
      </Button>
    );
  }
  const formatRole = (role) => {
    if (role === 2) {
      return <Badge bg="warning">Nhân viên</Badge>;
    } else if (role === 3) {
      return <Badge>Khách hàng</Badge>;
    }
  };

  const isVerified = (check) => {
    if (check === 1) {
      return (
        <div className="text-success">
          <SiVerizon />
        </div>
      );
    } else if (check === 2) {
      return (
        <div className="text-danger">
          <FaBan />
        </div>
      );
    }
  };
  const formatName = (firstName, lastName) => {
    return (lastName || "") + " " + (firstName || "");
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getAllUser(page, perPage);
        const { totalPage, total, allUsers } = response.data.data;
        setAllUsers(allUsers);
        setTotalPage(totalPage);
        setTotal(total);
      } catch (error) {
        const message = error.response.data.message;
        toast.error(message);
      }
    };

    fetchUser();
  }, [page, perPage]);

  const handleEditUser = (id) => {
    navigate(`/admin/user-profile/${id}`);
  };
  return (
    <div className="App">
      <AdminHeader />
      <AdminMenu />
      <div
        style={{
          margin: 30,
          marginLeft: 250,
        }}
      >
        {allUsers !== null ? (
          <>
          

        <table class="table table-striped table-bordered">
          <thead>
            <tr
              style={{
                textAlign: "center",
              }}
            >
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">role</th>
              <th scope="col">isVerified</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.length > 0 &&
              allUsers.map((User) => {
                return (
                  <tr
                    class="align-middle"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <th scope="row">{User.id}</th>
                    <td>{formatName(User.firstName, User.lastName)}</td>
                    <td>{User.email}</td>
                    <td>{formatRole(User.role)}</td>
                    <td>{isVerified(User.isVerified)}</td>
                    <td>
                      {moment(User.createdAt).format("DD/MM/YYYY h:mm:ss a")}
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleEditUser(User.id)}
                      >
                        <AiFillEdit />
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            gap: 5,
            justifyContent: "flex-end",
            paddingRight: 5,
            alignItems: "center",
          }}
        >
          <div className="mx-3">Tổng số bản ghi: {total}</div>
          <Form.Select
            className="w-auto"
            onChange={handleChangePerPage}
            aria-label="Default select example"
            defaultValue={perPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </Form.Select>
          {paginationButton}
        </div>
        </>
        ):(<div> </div>)
        }
        
      </div>
      <ToastContainer />
    </div>
  );
}

export default Users;
