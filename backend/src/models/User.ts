export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface signUpDTO {
  name: string;
  email: string;
  password: string;
}

export interface loginDTO {
  email: string;
  password: string;
}
