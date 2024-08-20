import axios from "axios";

const orderURL = "http://localhost:4000/order";

export const getAllOrderforAdmin = async (page, perPage, status) => {
  return await axios.get(`${orderURL}/admin`, {
    params: {
      page,
      perPage,
      status,
    },
  });
};
export const getAllOrder = async (page, perPage, status) => {
  const token = localStorage.getItem("token");
  return await axios.get(
    `${orderURL}/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        perPage,
        status,
      },
    },
  );
};

export const getCreateOrder = async (order) => {
  const token = localStorage.getItem("token");
  return await axios.post(`${orderURL}/`, order, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getOrderProfile = async (id) => {
  return await axios.get(`${orderURL}/${id}`);
};

export const getUpdateOrder = async (id, order) => {
  return await axios.put(`${orderURL}/${id}`, order);
};
