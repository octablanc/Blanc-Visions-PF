import { Role } from "./Role.model";

export interface User {
  id: Number | undefined;
  name: String | undefined;
  lastName: String | undefined;
  imageProfile: undefined | string;
  phone: Number | undefined;
  mail: String | undefined;
  password: String | undefined;
  userName: String | undefined;
  birthday: String | undefined;
  state: Boolean | undefined;
  createdAt: String | undefined;
  updatedAt: String | undefined;
  role: Role | undefined;
}