import type { Shelve } from "../models/Shelve";

export const fakeShelves: Shelve[] = [
  {
    id: "s1",
    userId: "u1",
    name: "Estante de Trabalho",
    createdAt: new Date("2023-01-10T10:00:00Z"),
    updatedAt: new Date("2023-01-11T10:00:00Z"),
  },
  {
    id: "s2",
    userId: "u1",
    name: "Projetos Pessoais",
    createdAt: new Date("2023-01-15T10:00:00Z"),
    updatedAt: new Date("2023-01-16T10:00:00Z"),
  },
  {
    id: "s3",
    userId: "u2",
    name: "Documentos Importantes",
    createdAt: new Date("2023-02-10T10:00:00Z"),
    updatedAt: new Date("2023-02-11T10:00:00Z"),
  },
];
