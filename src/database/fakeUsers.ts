import type { User } from "../models/User";

export const fakeUsers: User[] = [
  {
    id: "u1",
    email: "flucas.dev@gmail.com",
    password: "Senha123!",
    name: "Lucas Silva",
    typeUser: "admin",
    createdAt: new Date("2023-01-01T10:00:00Z"),
    updatedAt: new Date("2023-01-02T10:00:00Z"),
  },
  {
    id: "u2",
    email: "ana@example.com",
    password: "AnaSenha!234",
    name: "Ana Maria",
    typeUser: "user",
    createdAt: new Date("2023-02-01T10:00:00Z"),
    updatedAt: new Date("2023-02-02T10:00:00Z"),
  },
];
