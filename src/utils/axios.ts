import axios from "axios";
import { setupInterceptorsTo } from "./interceptor";
const { API_URL } = process.env;
const createApi = (path: string) => {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  const api = setupInterceptorsTo(
    axios.create({
      baseURL: `${API_URL as string}${path}`,
      withCredentials: true,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
  return api;
};
export default createApi;
