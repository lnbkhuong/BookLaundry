import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
import "./PaymentSuccess.css";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { checkStatusPayment } from "../../../API/Payment/Payment.API";
import { getCreateOrder, getUpdateOrder } from "../../../API/Order/Order.API";
import moment from "moment"
PaymentSuccess.propTypes = {};

function PaymentSuccess(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  console.log("🚀 ~ file: PaymentSuccess.js:16 ~ PaymentSuccess ~ params:", params)

  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setIsLoading] = useState(false);
const [a,seta] = useState({
  nameService: "Giặt cao cấp",
  unitPrice: "50.000",
})
const [b,setb] = useState(null)
  console.log("🚀 ~ PaymentSuccess ~ b:", b)
  useEffect(() => {
    const checkStatus = async () => {
      try {
        setIsLoading(true);
        const res = await checkStatusPayment(params);
        const { RspCode, message, data } = res.data;

        if (RspCode === "00" && message === "success") {
          setPaymentInfo(res.data.data);
          setIsLoading(false);

          const orderPayLoad = JSON.parse(localStorage.getItem("orderPayLoad"));
          if (orderPayLoad) {
            await getUpdateOrder(Number(orderPayLoad.id), orderPayLoad.order);
            localStorage.removeItem("orderPayLoad")
          }
          toast.success("Payment successfully");
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    
    checkStatus();
    const create = async () =>{
      const response = await getCreateOrder(a)
      setb(response.data.data)
    }
    create()
  }, []);

  return (
    <div className="mainContainer">
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {paymentInfo && (
        <div className="innerContainer">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: 20,
            }}
          >
            <div
              style={{
                backgroundColor: "#E4F3ED",
                padding: 20,
                borderRadius: "50%",
              }}
            >
              <FaCheckCircle color="#23A26D" size="50" />
            </div>

            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: 27,
                  fontWeight: 400,
                }}
              >
                Thanh toán thành công
              </p>

              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: 40,
                  fontStyle: "normal",
                  fontWeight: 600,
                }}
              >
                {paymentInfo.amount} vnđ
              </p>
            </div>
          </div>

          <div style={{ padding: 20 }}>
            <div className="payment-content-row">
              <p className="payment-content-label">ID</p>
              <p className="payment-content-info">{paymentInfo.bankTranNo}</p>
            </div>

            <div className="payment-content-row">
              <p className="payment-content-label">Ngày thanh toán</p>
              <p className="payment-content-info">{ moment(Number(paymentInfo.payDate)).format("DD/MM/YYYY h:mm:ss a")}</p>
            </div>

            <div className="payment-content-row">
              <p className="payment-content-label">Tên ngân hàng</p>
              <p className="payment-content-info">{paymentInfo.bankCode}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentSuccess;
