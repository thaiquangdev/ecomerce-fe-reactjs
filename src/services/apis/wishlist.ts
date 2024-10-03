import axios from "../../utils/axiosIntance";

export const createWishlistApi = async (pid: string) => {
  try {
    const response = await axios({
      url: "wishlists/" + pid,
      method: "post",
    });
    return response; // Trả về response
  } catch (error) {
    console.error("Error creating wishlist:", error);
    return null; // Trả về null nếu có lỗi
  }
};

export const deleteWishlistApi = async (wid: string) => {
  try {
    const response = await axios({
      url: "wishlists/" + wid,
      method: "delete",
    });
    return response; // Trả về response
  } catch (error) {
    console.error("Error deleting wishlist:", error);
    return null; // Trả về null nếu có lỗi
  }
};

export const getWishlistsApi = async () => {
  try {
    const response = await axios({
      url: "wishlists/",
      method: "get",
    });
    return response; // Trả về response
  } catch (error) {
    console.error("Error fetching wishlists:", error);
    return null; // Trả về null nếu có lỗi
  }
};
