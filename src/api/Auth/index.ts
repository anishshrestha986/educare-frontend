import { AxiosResponse } from "axios";
import { METHODS } from "../../enums/axios.enum";
import {
  ILoginResponse,
  IUserResponse,
} from "../../types/interfaces/auth.interface";
import createApi from "../../utils/axios";

const userApi = createApi("/auth");

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  userName: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export const register = async (registerBody: IRegisterRequest) => {
  const data = await userApi({
    url: "/register",
    method: METHODS.POST,
    data: registerBody,
  });

  return data;
};

export const login = async (
  logInBody: ILoginRequest
): Promise<AxiosResponse<ILoginResponse>> => {
  const data = await userApi({
    url: "/login",
    method: METHODS.POST,
    data: logInBody,
  });

  return data;
};
export const getMe = async (): Promise<AxiosResponse<IUserResponse>> => {
  const data = await userApi({
    url: "/me",
    method: METHODS.GET,
  });

  return data;
};
