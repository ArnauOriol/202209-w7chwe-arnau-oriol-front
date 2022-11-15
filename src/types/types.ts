export interface RegisterData {
  username: string;
  email: string;
  picture?: string;
}

export interface UserRegisterData {
  username: string;
  password: string;
  email: string;
  picture?: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface UsersState {
  list: User[];
}

export interface User {
  username: string;
  email: string;
  picture: string;
  id: string;
  friends: [];
  enemies: [];
}

export interface UserLoginData {
  id: string;
  token: string;
  username: string;
}

export interface UserState {
  username: string;
  id: string;
  token: string;
  isLogged: boolean;
}

export interface JwtCustomPayload {
  id: string;
  username: string;
}
