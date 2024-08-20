import React, { useEffect, useState } from "react";
import Header from "../../Client/Header/Header";
import {
  Badge,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderProfile, getUpdateOrder } from "../../../API/Order/Order.API";
import { ToastContainer, toast } from "react-toastify";
import { createPayment } from "../../../API/Payment/Payment.API";
import moment from "moment";

function OrderProfile(props) {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  console.log("🚀 ~ file: OrderProfile.js:11 ~ OrderProfile ~ order:", order);
  const { id } = useParams();

  const formatName = (firstName, lastName) => {
    return (firstName || "") + " " + (lastName || "");
  };

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
  const handlePay = async (e) => {
    try {
      const orderPayLoad = {
        id: id,
        order: {
          unitPrice: order.unitPrice,
          quantity: order.quantity,
          totalPrice: order.totalPrice,
          status: 3,
        },
      };
      localStorage.setItem("orderPayLoad", JSON.stringify(orderPayLoad));
      const response = await createPayment({
        amount: 20000,
        bankCode: "VNBANK",
        language: "vn",
      });
      const vnpUrl = response.data.data.vnpUrl;

      window.open(vnpUrl, "_blank");
      navigate("/orderstatus");
    } catch (error) {}
  };

  const handleBack = () => {
    navigate("/orderstatus");
  };

  const handleCancel = async () => {
    try {
      await getUpdateOrder(Number(id), { ...order, status: 7 });
      setTimeout(() => {
        navigate("/orderstatus");
      }, [1000]);
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
    }
  };
  useEffect(() => {
    const fetchOrderProfile = async () => {
      try {
        const response = await getOrderProfile(Number(id));

        const { detailOrder } = response.data.data;

        setOrder(detailOrder);
      } catch (error) {
        const message = error.response.data.message;
        toast.error(message);
      }
    };
    fetchOrderProfile();
  }, []);
  return (
    <div>
      <Header />

      <Container>
        {order ? (
          <>
            {/* <Row style={{
                margin: "auto"
              }}> */}
            <Col
              md={6}
              style={{
                margin: "auto",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                Đơn hàng
              </h2>
              <Form>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Tên người dùng</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Label>
                      {formatName(order.User.firstName, order.User.lastName)}
                    </Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Số điện thoại</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Label>{order.User.phoneNumber}</Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Địa chỉ</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Label>{order.User.address}</Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Tên dịch vụ</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Label>{order.Service.nameService}</Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Đơn giá</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Label>{order.Service.priceService}</Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Số cân</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Label>
                      {order.quantity === null ? 0 : order.quantity} kg
                    </Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Tổng tiền</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Label>
                      {order.totalPrice === null || order.totalPrice === "0.000"
                        ? 0
                        : order.totalPrice}{" "}
                      vnđ
                    </Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Ghi chú</Form.Label>
                  </Col>
                  <Col md={8}>
                    <div style={{wordBreak: "break-word", overflowWrap: "break-word"}}>
                      <Form.Label>{order.note}</Form.Label>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Trạng thái</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Label>{formatStatus(order.status)}</Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={4}>
                    <Form.Label>Thời gian</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Label>
                      {moment(order.updateAt).format("DD/MM/YYYY h:mm:ss a")}
                    </Form.Label>
                  </Col>
                </Row>

                <div style={{ display: "flex" }}>
                  {order.status === 1 ? (
                    <>
                      <Button
                        variant="primary"
                        //   type="submit"
                        style={{
                          width: 100,
                        }}
                        onClick={handleBack}
                      >
                        Quay lại
                      </Button>

                      <Button
                        variant="danger"
                        //   type="submit"
                        style={{
                          width: 100,
                          margin: "auto",
                        }}
                        onClick={handleCancel}
                      >
                        Hủy Đơn
                      </Button>
                    </>
                  ) : order.status === 2 ? (
                    <>
                      <Button
                        variant="primary"
                        //   type="submit"
                        style={{
                          width: 100,
                        }}
                        onClick={handleBack}
                      >
                        Quay lại
                      </Button>
                      <Button
                        variant="success"
                        style={{
                          margin: "auto",
                        }}
                        onClick={handlePay}
                      >
                        Thanh toán
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="primary"
                      style={{
                        margin: "auto",
                      }}
                      onClick={handleBack}
                    >
                      Quay lại
                    </Button>
                  )}
                </div>
              </Form>
            </Col>
            {/* </Row> */}
          </>
        ) : (
          <div>loading api</div>
        )}
        <ToastContainer />
      </Container>
    </div>
  );
}

export default OrderProfile;
