export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  typeUser: "admin" | "user" | "guest";
  createdAt: Date;
  updatedAt: Date;
}
