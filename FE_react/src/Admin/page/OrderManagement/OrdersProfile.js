import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import AdminMenu from "../../toolbar/AdminMenu";
import AdminHeader from "../../toolbar/AdminHeader";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderProfile, getUpdateOrder } from "../../../API/Order/Order.API";
function OrdersProfile(props) {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  console.log("🚀 ~ file: OrderProfile.js:15 ~ OrderProfile ~ order:", order);
  const { id } = useParams();

  const formatName = (firstName, lastName) => {
    return (lastName || "") + " " + (firstName || "");
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

  const handleBack = () => {
    navigate("/admin/order");
  };

  const handleChange = (event) => {
    if (event.target.name === "status") {
      setOrder({
        ...order,
        [event.target.name]: Number(event.target.value),
      });

      return;
    }
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await getUpdateOrder(Number(id), order);
      const message = response.data.message;

      toast.success(message);
      // setUpdateUser(null);
      setTimeout(() => {
        window.location.reload();
      }, [1000]);
    } catch (error) {}
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
          {order ? (
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
                    Đơn hàng
                  </h2>
                  <Form>
                    <Form.Group className="mb-2 w-50" control Id="first Name">
                      <Form.Label className="ml-3">Tên người dùng</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        default
                        Value={formatName(
                          order.User.firstName,
                          order.User.lastName
                        )}
                        required
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" control Id="phone">
                      <Form.Label>Số điện thoại</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        default
                        value={order.User.phoneNumber}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" control Id="address">
                      <Form.Label>Địa chỉ</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        default
                        value={order.User.address}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-2 w-50" control Id="name service">
                      <Form.Label>Tên dịch vụ</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        default
                        Value={order.Service.nameService}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-2" control Id="price">
                      <Form.Label>Đơn giá</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        default
                        value={order.Service.priceService}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" control Id="quantity">
                      <Form.Label>Số cân</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập số lượng kg"
                        default
                        name="quantity"
                        value={order.quantity}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="note">
                      <Form.Label>Ghi chú</Form.Label>
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label=""
                        className="mb-3"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          name="note"
                          value={order.note}
                          onChange={handleChange}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-2 w-50" control Id="name service">
                      <Form.Label>Tổng tiền</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        default
                        Value={order.totalPrice}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label className="mr-5">
                        Trạng thái <span className="text-danger">*</span>
                      </Form.Label>
                      <div>
                        <Form.Check
                          inline
                          type="radio"
                          name="status"
                          label="Đơn hàng mới"
                          id="status-1"
                          value={1}
                          checked={order.status === 1}
                          onChange={handleChange}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="status"
                          label="Đơn đã xác nhận"
                          id="status-2"
                          value={2}
                          checked={order.status === 2}
                          onChange={handleChange}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="status"
                          label="Đơn đã thanh toán"
                          id="status-3"
                          value={3}
                          checked={order.status === 3}
                          onChange={handleChange}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="status"
                          label="Đơn đang giặt"
                          id="status-4"
                          value={4}
                          checked={order.status === 4}
                          onChange={handleChange}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="status"
                          label="Đơn đang giao hàng"
                          id="status-5"
                          value={5}
                          checked={order.status === 5}
                          onChange={handleChange}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="status"
                          label="Đơn hoàn tất"
                          id="status-6"
                          value={6}
                          checked={order.status === 6}
                          onChange={handleChange}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="status"
                          label="Đơn đã hủy"
                          id="status-7"
                          value={7}
                          checked={order.status === 7}
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

export default OrdersProfile;
