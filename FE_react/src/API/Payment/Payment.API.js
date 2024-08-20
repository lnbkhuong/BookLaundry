import axios from "axios";

const payURL = "http://localhost:4000/api/payment";

export const createPayment = async (payment) => {
  return axios.post(`${payURL}/create-payment-url`, payment);
};
export const checkStatusPayment = async (payment) => {
  return axios.get(`${payURL}/payment-detail`, {
    params: {
      payment,
    },
  });
};
