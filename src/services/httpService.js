import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "application/json";
const token= localStorage.getItem("TopLearnToken");
if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    console.log(error);
    toast.error("مشکلی پیش آمده.", {
      position: "top-right",
      closeOnClick: true,
    });
    return Promise.reject(error);
  }
});

export default {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
  put:axios.put
};
