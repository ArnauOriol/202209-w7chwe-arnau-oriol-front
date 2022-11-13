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

export interface UsersState {
  list: User[];
}

export interface User {
  name: string;
  email: string;
  picture: string;
  id: string;
  friends: [];
  enemies: [];
}
