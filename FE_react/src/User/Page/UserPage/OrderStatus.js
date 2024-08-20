import React, { useEffect, useState } from "react";
import Header from "../../Client/Header/Header";
import { Badge, Button, Form, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import { getAllOrder } from "../../../API/Order/Order.API";
import { AiFillEdit } from "react-icons/ai";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function OrderStatus(props) {
  const navigate = useNavigate();
  const [allOrder, setAllOrder] = useState([]);
  console.log("🚀 ~ OrderStatus ~ allOrder:", allOrder)
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPage, setTotalPage] = useState(null);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(1);
  const paginationButton = [];

  const handleChangePage = (index) => {
    setPage(index);
  };

  const handleChangePerPage = (event) => {
    setPerPage(event.target.value);
  };

  const handleChangeStatus = (eventKey) => {
    setStatus(eventKey);
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
    return (lastName || "") + " " + (firstName || "");
  };
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getAllOrder(page, perPage, status);
        const { totalPage, total, allOrder } = response.data.data;
        setAllOrder(allOrder);
        setTotalPage(totalPage);
        setTotal(total);
      } catch (error) {
        const message = error.response.data.message;
        toast.error(message);
        if(allOrder.length === 0){
          navigate("/")
        }
      }
    };
    fetchOrder();
  }, [page, perPage, status]);

  const handleCheckOrder = (id) => {
    navigate(`/orderProfile/${id}`)
  };
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: 20,
        }}
      >
        <Nav
          justify
          variant="tabs"
          defaultActiveKey="1"
          onSelect={handleChangeStatus}
        >
          <Nav.Item>
            <Nav.Link eventKey="1">Đơn hàng mới</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">Đơn đã xác nhận</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3">Đơn đã thanh toán</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4">Đơn đang giặt</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5">Đơn đang giao</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="6">Đơn hoàn tất</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="7">Đơn bị hủy</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div
        style={{
          marginTop: 20,
          marginLeft: 100,
          marginRight: 100,
        }}
      >
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
                    <td>
                      {formatName(Order.User.firstName, Order.User.lastName)}
                    </td>
                    <td>{formatStatus(Order.status)}</td>
                    <td>{Order.totalPrice}</td>
                    <td>
                      {moment(Order.createdAt).format("DD/MM/YYYY h:mm:ss a")}
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleCheckOrder(Order.id)}
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
        <ToastContainer />
      </div>
    </>
  );
}

export default OrderStatus;
