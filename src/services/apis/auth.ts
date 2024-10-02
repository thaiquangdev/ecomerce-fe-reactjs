import axios from "../../utils/axiosIntance";

interface DataLoginProps {
  email: string;
  password: string;
}

export const loginApi = (data: DataLoginProps) =>
  axios({
    url: "/users/login",
    method: "post",
    data,
  });

interface DataRegisterProps {
  email: string;
  password: string;
  fullName: string;
}

export const registerApi = (data: DataRegisterProps) =>
  axios({
    url: "/users/register",
    method: "post",
    data,
  });
