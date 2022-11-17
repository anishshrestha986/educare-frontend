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

interface ILoginResponse {
  access_token: string;
  user: {
    _id: string;
    roles: Array<string>;
    emailVerified: boolean;
    email: string;
    lastName: string;
    firstName: string;
  };
}

interface IUserResponse {
  _id: string;
  roles: Array<string>;
  emailVerified: boolean;
  email: string;
  lastName: string;
  firstName: string;
}

export type { ILoginResponse, IUserResponse };
