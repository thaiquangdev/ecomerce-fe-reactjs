import axios from "../../utils/axiosIntance";

export const createWishlistApi = (pid: string) => {
  axios({
    url: "wishlits/" + pid,
    method: "post",
  });
};

export const deleteWishlistApi = (pid: string) => {
  axios({
    url: "wishlits/" + pid,
    method: "delete",
  });
};

export const getWishlistsApi = (pid: string) => {
  axios({
    url: "wishlits/" + pid,
    method: "get",
  });
};
