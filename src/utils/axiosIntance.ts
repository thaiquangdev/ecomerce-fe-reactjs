import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

// Response Interceptor - Để xử lý lỗi từ API và trả về chính xác
axiosInstance.interceptors.response.use(
  function (response) {
    // Trả về dữ liệu response khi request thành công
    return response;
  },
  function (error) {
    // Xử lý các lỗi từ API (ví dụ: 400, 401, 403, 500...)
    if (error.response) {
      // Nếu API trả về lỗi, ta trả về phần response để xử lý tại client
      return Promise.reject(error.response);
    } else if (error.request) {
      // Nếu không có phản hồi từ server (lỗi network)
      return Promise.reject({ message: "No response from server", ...error });
    } else {
      // Các lỗi khác
      return Promise.reject(error);
    }
  }
);

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
