import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getLocalStorage, setLocalStorage } from "./storage";

const { API_URL } = process.env;

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (config.headers === undefined) {
    config.headers = {};
  }
  const token = getLocalStorage("access_token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError<any>) => {
  if (error.response) {
    // Access Token was expired
    if (
      error.response.status === 401 &&
      error.response.data.message === "jwt expired"
    ) {
      const storedToken = getLocalStorage("access_token");

      try {
        const rs = await axios.post(`${API_URL}/auth/refresh`, {
          refresh_token: storedToken,
        });

        const { token, user } = rs.data;

        setLocalStorage("access_token", JSON.stringify(token));
        setLocalStorage("user", JSON.stringify(user));

        return;
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
