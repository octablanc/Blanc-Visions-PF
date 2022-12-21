import { Role } from "./Role.model";

export interface User {
    map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  id: Number;
  name: String;
  lastName: String;
  imageProfile: String;
  phone: Number;
  mail: String;
  password: String;
  userName: String;
  birthday: String;
  state: Boolean;
  createdAt: String;
  updatedAt: String;
  role: Role;
}
