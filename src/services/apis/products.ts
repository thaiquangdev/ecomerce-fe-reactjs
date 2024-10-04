import axios from "../../utils/axiosIntance";

export const getProductsApi = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return axios({
    url: `/products${queryString ? `?${queryString}` : ""}`,
    method: "get",
  });
};

export const getProductApi = (slug: string) =>
  axios({
    url: "/products/" + slug,
    method: "get",
  });
