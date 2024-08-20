import axios from "axios";

const AuthenURL = "http://localhost:4000/user";
export const LoginAPI = async (email, password) => {
  return await axios.post(`${AuthenURL}/login`, {
    email,
    password,
  });
};


export const SignUpAPI = async (user) => {
  return await axios.post(`${AuthenURL}/sign-up`, user)
}