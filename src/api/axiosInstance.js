import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // http://localhost:5000/api
  timeout: 10000,
});

// Optional: you can add interceptors later for auth tokens
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errMsg =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      error.message ||
      "Something went wrong";

    return Promise.reject(errMsg);
  }
);

export default axiosInstance;
