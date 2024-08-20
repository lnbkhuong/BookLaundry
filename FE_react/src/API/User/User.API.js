import axios from "axios";

const UserURL = "http://localhost:4000/user";
export const getAllUser = async (page, perPage) => {
  const token = localStorage.getItem("token");
  return await axios.get(`${UserURL}/admin`, {
    params: {
      page,
      perPage,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  return await axios.get(`${UserURL}/getdetail`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserProfileforAdmin = async (id) => {
  return await axios.get(`${UserURL}/admin/${id}`);
};

export const getUpdateUserforAdmin = async(id, updateUser) => {
  return await axios.put(`${UserURL}/update/${id}`,updateUser)
}

export const getUpdateUser = async(updateUser) => {
  console.log("🚀 ~ file: User.API.js:31 ~ getUpdateUser ~ updateUser:", updateUser)
  const token = localStorage.getItem("token");
  return await axios.put(`${UserURL}/update`,updateUser,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}