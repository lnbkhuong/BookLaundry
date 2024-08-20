import axios from "axios";

const serviceURL = "http://localhost:4000/service";

export const getAllService = async () => {
  return await axios.get(`${serviceURL}`);
};

export const getAllServiceforAdmin = async (page, perPage) => {
  const token = localStorage.getItem("token");
  return await axios.get(`${serviceURL}/admin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page,
      perPage,
    },
  });
};
