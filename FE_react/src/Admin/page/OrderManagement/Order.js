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
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../toolbar/AdminHeader";
import AdminMenu from "../../toolbar/AdminMenu";
import { Badge } from "react-bootstrap";
import { getAllOrderforAdmin } from "../../../API/Order/Order.API";

function Order(props) {
  const navigate = useNavigate();
  const [allOrder, setAllOrder] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPage, setTotalPage] = useState(null);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(null);
  console.log("🚀 ~ file: Order.js:29 ~ Order ~ status:", status)

  const paginationButton = [];

  const handleChangePage = (index) => {
    setPage(index);
  };

  const handleChangePerPage = (event) => {
    setPerPage(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value)
  }
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
  const formatStatus = (status) => {
    if (status === 1) {
      return <Badge bg="secondary">Đơn hàng mới</Badge>;
    } else if (status === 2) {
      return <Badge bg="info">Đã xác thực</Badge>;
    } else if (status === 3) {
      return <Badge bg="warning">Đã thanh toán</Badge>;
    } else if (status === 4) {
      return <Badge>Đang giặt</Badge>;
    } else if (status === 5) {
      return <Badge>Đang giao hàng</Badge>;
    } else if (status === 6) {
      return <Badge bg="success">Hoàn tất</Badge>;
    } else if (status === 7) {
      return <Badge bg="danger">Hủy đơn</Badge>;
    }
  };

  const formatName = (firstName, lastName) => {
    return (firstName || "") + " " + (lastName || "");
  };
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getAllOrderforAdmin(page, perPage, status);
        const { totalPage, total, allOrder } = response.data.data;
        setAllOrder(allOrder);
        setTotalPage(totalPage);
        setTotal(total);
      } catch (error) {
        const message = error.response.data.message;
        toast.error(message);
      }
    };

    fetchOrder();
  }, [page, perPage, status]);

  const handleEditOrder = (id) => {
    navigate(`/admin/order-profile/${id}`)
  }
  const handleReload = () => {
    window.location.reload()
  }

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
        <InputGroup className="mb-3">
         <Form.Select
            className="w-auto"
            onChange={handleChangeStatus}
            aria-label="Default select example"
            value={status}
            defaultValue="null"
          >
            <option value="null" disabled>Chọn trạng thái</option>
            <option value="1">Đơn hàng mới</option>
            <option value="2">Đã xác nhận </option>
            <option value="3">Đã thanh toán</option>
            <option value="4">Đang giặt </option>
            <option value="5">Đang giao hàng</option>
            <option value="6">Đã hoàn tất</option>
            <option value="7">Hủy đơn</option>
          </Form.Select>
          <Button variant="warning" onClick={handleReload}>
            Reset
          </Button>
          </InputGroup>
        <table class="table table-striped table-bordered">
          <thead>
            <tr
              style={{
                textAlign: "center",
              }}
            >
              <th scope="col">Mã đơn hàng</th>
              <th scope="col">Tên dịch vụ</th>
              <th scope="col">Tên người dùng</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Thời gian tạo</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allOrder.length > 0 &&
              allOrder.map((Order) => {
                return (
                  <tr
                    class="align-middle"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <th scope="row">{Order.id}</th>
                    <td>{Order.Service.nameService}</td>
                    <td>{formatName(Order.User.firstName, Order.User.lastName)}</td>
                    <td>{formatStatus(Order.status)}</td>
                    <td>{Order.totalPrice}</td>
                    <td>
                      {moment(Order.createdAt).format("DD/MM/YYYY h:mm:ss a")}
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleEditOrder(Order.id)}
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
      </div>
      <ToastContainer />
    </div>
  );
}

export default Order;
