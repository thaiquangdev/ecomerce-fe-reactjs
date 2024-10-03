import axios from "../../utils/axiosIntance";

interface data {
  quantity: number;
  price: number;
  discount: number;
  color: string;
  storage: string;
  sku: string;
  pid: string;
}

export const addToCartApi = (data: data) =>
  axios({
    url: "/carts",
    method: "post",
    data,
  });

export const getAllCartsApi = () =>
  axios({
    url: "/carts",
    method: "get",
  });

export const deleteCartApi = (pid: string) =>
  axios({
    url: "/carts/delete-cart",
    method: "delete",
    data: { pid },
  });
