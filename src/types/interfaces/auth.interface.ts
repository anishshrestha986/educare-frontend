export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  roles: Array<string>;
  _id: string;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  access_token: string;
  data: {
    user: IUser;
  };
}

export interface IUserResponse {
  status: string;
  data: {
    user: IUser;
  };
}
