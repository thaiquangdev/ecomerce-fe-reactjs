import axios from "../../utils/axiosIntance";

export const getProductsApi = () =>
  axios({
    url: "/products",
    method: "get",
  });

export const getProductApi = (slug: string) =>
  axios({
    url: "/products/" + slug,
    method: "get",
  });
